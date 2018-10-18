const MongoClient = require('mongodb').MongoClient;
const DBName = 'entertainment';

//note authentication via url
//this should be replaced with environment variables (for security)
const url = `mongodb://lolcat:meowdb@localhost:27017/${DBName}`;

/*
CALLBACK METHOD

Mongo is backwards-compatible to accepting callback functions to any request.

In this example:
- connect to mongo + authenticate
- connect to database
- run query
- console output
- close connection
*/

//connect call returns a connection promise, which can be 'then' with a callback
MongoClient.connect(url, (err, client)=>{
  if(!err){
    console.log("Connected successfully to server");

    const db = client.db(DBName);
    findTravolta(db,(result)=>{
        console.log(result);
    })
    client.close();
  }else{
      console.log(err)
  }
});

const findTravolta = (db, callback)=>{
  // Get the documents collection
  const collection = db.collection('actors');
  // Find some documents
  collection.find({}).toArray( (err, docs)=> {
    if(!err){
        console.log("Found the following records");
        console.log(docs)
        callback(docs);
    }else{
        callback(err);
    }
  });
}
