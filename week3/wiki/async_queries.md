### Mongo Drivers

To connect node to your mongo database, you'll need to make http requests on the port that the mongo server is listening on. There are some excellent node-based mongo client apis available, including the officially supported one that is registered with npmjs.org

`npm init`

`npm install mongodb --save`

Can we connect to the database we created via shell script in the previous lab?

## Dealing with Asynchronisity

In the following examples, we will use latest ES6 techniques with the mongo drivers for querying the database. In earlier development days with javascript everything was done with basic functions (which is still the case now). The "callback" pattern emerged, due to javascript's prototypal event-based nature.

Callbacks lead to cumbersome deep chains of nested callbacks, also referred to as "callback hell".

To deal with this, the "promise" pattern emmerged. Promises wrap and provide an API to callbacks to provide easier to grasp code format.

The promise is a useful pattern, but does not deal effectively with the initial issue - long chains of callbacks end up being replaced with long chains of promises. To deal with this, ES6 has introduced two features, namely generators, and the async/await keywords. But first - how do we use promises??

### Lambda

Everything that follows is based upon a fundamental feature of javascript, namely that functions are first-class composable citizens. They can be named, and therefore passed into other contexts for execution (which is a significant difference from some other languages). They are also dynamic and can be re-composed on-the-fly as required.

This feature, combined with the event-based nature of javascript makes for a unique coding environment that can take some getting used to.

### Callbacks

*good for single calls*

```
const button = document.querySelector("button");
const div = document.querySelector("div");

const setText = (text) => {
  div.textContent = text
}

const checkAuth = cb => {
  setText('Checking Auth...')
  setTimeout(() => {
    cb(true);
  }, 2000);
};

const fetchUser = cb => {
  setText('Fetching User...')
  setTimeout(() => {
    cb({ name: "Max" });
  }, 2000);
};

button.addEventListener("click", () => {
  checkAuth(auth => {
    if (auth) {
      fetchUser(user => {
        setText(user.name)
      });
    }
  });
});
```

### Promises

*good for chains and parallelism*

```
const button = document.querySelector("button");
const div = document.querySelector("div");

const setText = (text) => {
  div.textContent = text
}

const checkAuth = () => {
  return new Promise((resolve, reject) => {
    setText('Checking Auth...')
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setText('Fetching User...');
    setTimeout(() => {
      resolve({ name: "Max" });
    }, 2000);
  });
};

button.addEventListener("click", () => {
  checkAuth()
     .then(
        isAuth => {
          if (isAuth) {
            return fetchUser()
          }
        }
      )
      .then(
        user => {
          setText(user.name)
        }
      )
});
```

[Promises Video](https://youtu.be/2d7s3spWAzo)

### Generators

*good for branching logic in chains*

Generators do not replace promises, but they use an "iterator" pattern to deal with chains of them. It is the classic problem of event-based architecture that events rarely happen in isolation. One event happens, then another, and eventually a series of events that must be dealt with. This usually means connection long chains of "then" calls provided by promises.

There are two parts to the generator. There is the generator itself, and a corresponding iterator.

A generator function is a wrapper to a series of function calls that yield promises.

A generator function is executed by an iterator function, which is a recursive function that will keep running as long as the next function call provided by the generator yields a promise.

[Generator Video](https://youtu.be/ategZqxHkz4)
[Excellent Article](https://eladnava.com/write-synchronous-node-js-code-with-es6-generators/)

### Async/Await

*good for linear chains*

The async/await combination is a set of keywords that provide almost the same result as the generator/iterator combination. The sytax of async/await might be considered somewhat simpler to comprehend as code is kept inline rather than relying on the relationship between functions.

Inside a function marked as 'async', the 'await' keyword allows the function execution to be paused while 'awaiting' the result of a promise.

```
const button = document.querySelector("button");
const div = document.querySelector("div");

const setText = (text) => {
  div.textContent = text
}

const checkAuth = () => {
  return new Promise((resolve, reject) => {
    setText('Checking Auth...')
    setTimeout(() => {
      resolve(true)
    }, 2000)
  })
}

const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setText('Fetching User...')
    setTimeout(() => {
      resolve({ name: "Max" });
    }, 2000)
  })
}

button.addEventListener("click", async () => {
  const isAuth = await checkAuth()
  let user = null;
  if (isAuth) {
    user = await fetchUser()
  }
  setText(user.name)
});
```
[Excellent Article](https://zeit.co/blog/async-and-await)
[Aync/Await video](https://youtu.be/568g8hxJJp4)