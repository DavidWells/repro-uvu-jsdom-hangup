# JSDOM + UVU repro

https://github.com/lukeed/uvu/issues/140

## Fix

https://github.com/lukeed/uvu/issues/124#issuecomment-912070397

```js
test.after(() => {
  setTimeout(() => {
    process.exit(0)
  }, 100)
})
```

---

## Issue 

Reproduction of hanging `uvu` test

```
npm install
```

Run tests

```
npm run test
```

See hanging process

![image](https://user-images.githubusercontent.com/532272/135145114-86739f4a-6017-4a9d-9b85-154ff2cbbbf9.png)
