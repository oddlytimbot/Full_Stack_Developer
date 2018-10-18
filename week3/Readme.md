# full_stack_lab3_api

Now that we have data persistence, it's time to open up access to it by designing a REST-based API.

A lot has changed in the last few years about the way databases are handled.

Originally (in earlier days of full stack development) the database was tightly integrated with site-serving, typically happening on the same physical server.

With the design of apis and authentication, the database handling got seperated from site-serving. That trend continued into the emmergence of the "micro service", and is now continuing on into "serverless architecture" - essentially micro-services deployed via API to "cloud functions" in Firebase or Lambda.

In this lab, we will look at the evolution of the micro-service by getting right back to the common ways of handling asyncronous actions in Javascript. These will include:

* Callbacks
* Promises
* Generators
* Async/await
* RxJS Observables

We will connect to and query Mongo using each of the methods above.

Also:

* Babel
* installing Babel plugins for pre-compiling
* npm scripts

We will create our first micro-service API capable of retreiving data from our Mongo database via query.