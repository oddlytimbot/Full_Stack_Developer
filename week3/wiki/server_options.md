## Using a Server

Now that you have the ability to handle async queries to the database, it is time to start thinking about how to server that information to a requesting client.

It is entirely possible to do this just by using Node.js. Node was built to handle http requests. But a robust API involves a good deal more than serving information to requests. It also involves factors like secure authentication, frequency limiting, data validation, reporting and on it goes.

For this reason, several libraries have been created that can be used for constructing an API.

Options:

* Express
* Koa
* Micro

### Express

Express is the original node server and extremely popular. It provides modules for just about everything you might want to do server-side.

All of that said, Express is showing it's age. In the time since it was written Node moved on to incorporating ES6 javascript, rapidly progressing from promises to generators, then async/await.

In addition, the trend has arisen of decoupling site-serving from the data API. This is also known as "microservices". It is likely the move to microservices will continue on into the adoption of faas architecture (microservices created through API such as Firebase or Lambda).

Express was created to serve both API and site. This is not to say it MUST do this, but Express includes a lot of code that simply isn't necessary for the microservices pattern.

### Koa

Koa is the unofficial "Express 5.0". Created by the original developers of Express, it was released under a new name due to backwards incompatibility with the older server.

Koa makes extensive use of ES6 generators to symplify asynchronous actions.

There is a Koa 2.0 that makes use of async/await, but there is also a newer server purpose built with that feature.

### Micro

Micro was purpose-built to use async/await.

[Setting up Micro on Node6](https://gist.github.com/rauchg/8199de60db48026a6670620a1c33b700)

