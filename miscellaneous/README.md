# Creating NFT rules for policy based routing

We need the function with the following arguments:

```js
async function generateRule (proto, sourceIps, sourcePorts, destIps, destPorts, fwMark, lanZoneIfaces)
```

proto -> can be 'all', 'icmp' or 'tcp' or 'udp' or it may also be 'tcp,udp' separated by comma
sourceIps -> is a string of ip's separated by a comma can be both ipv4 and ipv6
sourcePorts -> can be port number separated by a space character or a range of ports like 0-65535 or it can be a combination of both like 0-65535 80 443 (will be none in the case of icmp/all proto)
destIps -> is a string of ip's separated by a comma can be both ipv4 and ipv6
destPorts -> can be port number separated by a space character or a range of ports like 0-65535 or it can be a combination of both like 0-65535 80 443 (will be none in the case of icmp/all proto)
fwMark -> is a hexadeciaml number
lanZoneIfaces -> is an array of interface names like ["br-lan", "br-guest"]

In the end we want to return a string like this:

```
chain mangle_output {
	ip saddr { 0.0.0.0/0 } ip daddr { 104.31.16.9, 104.31.16.120, 104.21.39.145, 172.67.170.206, 104.17.49.74, 104.17.50.74, 104.31.16.11, 104.31.16.118 } counter meta mark set 0x000affa1 comment "!fw4: 0x000affa1"
	ip6 saddr { ::/0 } ip6 daddr { 2606:4700:3033::6815:2791, 2606:4700:3033::ac43:aace } counter meta mark set 0x000affa1 comment "!fw4: 0x000affa1"
}

chain mangle_prerouting {
	iifname br-lan ip saddr { 0.0.0.0/0 } ip daddr { 104.31.16.9, 104.31.16.120, 104.21.39.145, 172.67.170.206, 104.17.49.74, 104.17.50.74, 104.31.16.11, 104.31.16.118 } counter meta mark set 0x000affa1 comment "!fw4: 0x000affa1"
	iifname br-lan ip6 saddr { ::/0 } ip6 daddr { 2606:4700:3033::6815:2791, 2606:4700:3033::ac43:aace } counter meta mark set 0x000affa1 comment "!fw4: 0x000affa1"
}
```

As you can guess the input for this string will be as follows :

```js
generateRule('all', '0.0.0.0/0,::/0', 'none', '104.31.16.9,104.31.16.120,104.21.39.145,172.67.170.206,104.17.49.74,104.17.50.74,104.31.16.11,104.31.16.118,2606:4700:3033::6815:2791, 2606:4700:3033::ac43:aace', 'none', '0x000affa1', ['br-lan'])
```

Things to keep in mind: 

The mangle_output rule will not have any interface name in it, since it is for packets that are leaving the router. You can learn more about nft rules [here](https://wiki.nftables.org/wiki-nftables/index.php/Quick_reference-nftables_in_10_minutes#Ruleset_structure)