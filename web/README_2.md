# Webserver that returns a page with a message and epoch time

This is a simple webserver that returns a page with a message and epoch time, the client side should be able to see the message and the epoch time and you must also show the time in the browser's local time.

## Expected output

```html
<html>
  <head>
    <title>2nd Challenge</title>
  </head>
  <body>
    <h1>2nd challenge</h1>
    <p>Current Epoch on Server: 1684566708</p>
    <p id="localTime">Local time: __BROWSER_TIME_HERE__ </p>
  </body>
</html>
```

## Notes

- You should not use any external libraries or frameworks to complete this challenge. Use the built-in Node.js modules only.
- You should use client side JavaScript to show the local time in the browser.