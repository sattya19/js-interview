## Fetch Data from API

There are 20 URLs you need to fetch the JSON from, each json object contains a property called "title" and price which you need to extract and store in an array. In the end you need to sort the array by price in ascending order and return the array along with the most expensive item as well as it's price.

### Input

```js
const endpoints = [
    "https://dummyjson.com/products/1",
    "https://dummyjson.com/products/2",
    "https://dummyjson.com/products/3",
    "https://dummyjson.com/products/4",
    "https://dummyjson.com/products/5",
    "https://dummyjson.com/products/6",
    "https://dummyjson.com/products/7",
    "https://dummyjson.com/products/8",
    "https://dummyjson.com/products/9",
    "https://dummyjson.com/products/10",
    "https://dummyjson.com/products/11",
    "https://dummyjson.com/products/12",
    "https://dummyjson.com/products/13",
    "https://dummyjson.com/products/14",
    "https://dummyjson.com/products/15",
    "https://dummyjson.com/products/16",
    "https://dummyjson.com/products/17",
    "https://dummyjson.com/products/18",
    "https://dummyjson.com/products/19",
    "https://dummyjson.com/products/20"
]
```

### Output

```js
const result = {
    "items": [
        {
            "title": "Product 1",
            "price": 1
        },
        {
            "title": "Product 2",
            "price": 2
        },
        {
            "title": "Product 3",
            "price": 3
        },
        {
            "title": "Product 4",
            "price": 4
        },
        {
            "title": "Product 5",
            "price": 5
        },
        {
            "title": "Product 6",
            "price": 6
        },
        {
            "title": "Product 7",
            "price": 7
        },
        {
            "title": "Product 8",
            "price": 8
        },
        {
            "title": "Product 9",
            "price": 9
        },
        {
            "title": "Product 10",
            "price": 10
        },
        {
            "title": "Product 11",
            "price": 11
        },
        {
            "title": "Product 12",
            "price": 12
        },
        {
            "title": "Product 13",
            "price": 13
        },
        {
            "title": "Product 14",
            "price": 14
        },
        {
            "title": "Product 15",
            "price": 15
        },
        {
            "title": "Product 16",
            "price": 16
        },
        {
            "title": "Product 17",
            "price": 17
        },
        {
            "title": "Product 18",
            "price": 18
        },
        {
            "title": "Product 19",
            "price": 19
        },
        {
            "title": "Product 20",
            "price": 20
        }
    ],
    "mostExpensive": {
        "title": "Product 20",
        "price": 20
    }
}
```

## Notes 

- The requests must be done in parallel