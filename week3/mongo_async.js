const MongoClient = require('mongodb').MongoClient;
const DBName = 'entertainment';

//note authentication via url
//this should be replaced with environment variables (for security)
const url = `mongodb://lolcat:meowdb@localhost:27017/${DBName}`;

/*
This example requires pre-compilation to execute.
Node6 comes with almost complete support for ES2017 with a couple of notable exceptions.
- no async/await
- no import for modules

It does, however, have support for generators! We will use
a tool that converts async functions in our code to generators.

Take a look in the package.json to see how we solve this
problem with the Babel pre-compiler.

npm run build
node dist/mongo_async.js
*/
async function connector() {

  let client;

  try {
    // Use connect method to connect to the Server
    client = await MongoClient.connect(url);

    const db = client.db(DBName);
    findTravolta(db);
    
  } catch (err) {
    console.log(err.stack);
  }

  if (client) {
    console.log("closing client");
    client.close();
  }
}

async function findTravolta(db){
  try {
    let r = await db.collection('actors').find({firstName:"John"}).toArray();
    
    console.log(r);
    
  } catch(err) {
    
    console.log(err)
    
  }
}

//do it
connector();

