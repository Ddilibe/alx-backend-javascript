# ES6 Promise

## Promise

The promise object repesents the eventual completion or failure of an asynchronous operation and its resulting value. A promise is a provxy for a value not necessarily known when thr promise is created. It allow you to associate handlers with an asynchronous action's eventual success value or failure reasons. This helps with potential error handling. It also helps to make a choice if the function did not succeed.

## Async

The async function declaration declares an async function where the await keyword is permitted within the function body. The async and await keywords enable asynchronous, promise-based behaviour to be written in a cleaner style, avoiding the need to ecplicitly configure promise chains

## Await
The await keyword can only be used in a function declared as async. It is used to pause the execution of its surrounding async function until the promise is either fulfiled or rejected.

## Throw
The throw expression throws a user-defined exception or an inbuilt exception. The execution of the function will be stopped and control will be passed to the first catch block in the call stack. If none is found, the program terminates

# Demo
1. <b> Promise </b>
```
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});
```

2. <b> Async </b>
```
unction resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();

```

3. <b> Await </b>
```
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  const x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}

f1();

```

4. <b> Throw </b>
```
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw 'Parameter is not a number!';
  }
}

try {
  getRectArea(3, 'A');
} catch (e) {
  console.error(e);
  // expected output: "Parameter is not a number!"
}
```


### Resource
1. [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
2. [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
3. [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
4. [Throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)