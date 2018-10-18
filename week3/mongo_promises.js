const MongoClient = require('mongodb').MongoClient;
const DBName = 'entertainment';

//note authentication via url
//this should be replaced with environment variables (for security)
const url = `mongodb://lolcat:meowdb@localhost:27017/${DBName}`;

/*
Mongo is cool with the promises. If no callback is specified on a request,
it automatically returns a promise.

In this example:
- connect to mongo + authenticate
- connect to database
- run query
- console output
- close connection
*/

//connect call returns a connection promise, which can be 'then' with a callback
MongoClient.connect(url)
  .then(con =>{ // <- callback
    console.log('Connected');
    return con.db('entertainment').collection('actors')
    .find({firstName: "John"}).toArray()
    .then(out => console.log(out))
    .then(()=> con.close() );
  })
  .catch( (err)=>{
    //if anything fails in the stack above, it will be caught here, stack stops
    console.log(err);//check for authentication fail?
  });
