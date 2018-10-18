const MongoClient = require('mongodb').MongoClient,
co = require('co');

const DBName = 'entertainment';

//note authentication via url
//this should be replaced with environment variables (for security)
const url = `mongodb://lolcat:meowdb@localhost:27017/${DBName}`;

/*
Co library:
Generator based control flow goodness for nodejs and the browser, using promises, 
letting you write non-blocking code in a nice-ish way.

Co is a runtime module, not involved in pre-compiling like async (through babel) is.
*/

co(function*() {
  // Use connect method to connect to the Server
  const con = yield MongoClient.connect(url);
  let r = yield con.db('entertainment').collection('actors').find({firstName:"John"}).toArray();
  console.log(r);
  // Close the connection
  console.log("closing database");
  con.close();
}).catch(function(err) {
  console.log(err.stack);
});

