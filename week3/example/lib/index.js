import request from 'request-promise';
import MongoClient from 'mongodb';
import micro,{
  json,
  send,
  sendError
} from 'micro';

const DBName = 'entertainment';
const url = `mongodb://lolcat:meowdb@localhost:27017/${DBName}`;

async function connector() {


  try {
    // Use connect method to connect to the Server
    return await await MongoClient.connect(url);
  } catch (err) {
    console.log(err.stack);
  }
}

async function findActor(db, query){
  try{
    let r = await db.collection('actors').find(query).toArray();
    console.log(r);
    return(r);
  } catch(err){
    return(err);
  }
}
async function updateActorByName(db, query){
  const {firstName, lastName} = query;
  try{
    return await db.collection('actors').update({firstName:firstName, lastName:lastName}, {$set: query}).toArray();
  } catch(err){
    return (err);
  }
}
async function insertActor(db, query){
  console.log("inserting an actor");
  try{
    return await db.collection('actors').insert(query);
  } catch(err) {
    return(err)
  }
}
async function deleteActorByName(db,query){
  const {firstName, lastName} = query;
  try{
    
    return await db.collection('actors').remove({firstName:firstName, lastName:lastName});
  
  }catch(err){
    return(err);
  }
}

/**
 * Handler functions
 */
 
async function getHandler(request){
  const js = await json(request);
  console.log(js);
  const client = await connector();
  const db = client.db(DBName);
  return await findActor(db, js);
}
async function postHandler (request){
  const js = await json(request)
  console.log(js);
  const client = await connector();
  const db = client.db(DBName);
  return await insertActor(db, js);
}
async function putHandler(request){
  const js = await json(request);
  const client = await connector();
  const db = client.db(DBName);
  return await updateActorByName(db, js);
}
async function deleteHandler(request){
  const js = await json(request);
  const client = await connector();
  const db = client.db(DBName);
  return await deleteActorByName(db, js);
}

export default async(request, response)=>{
  try{
    switch(request.method){
      case 'GET':
        console.log("a get call was made");
        return await getHandler(request);
      case 'POST':
        console.log("a post call was made");
        return await postHandler(request);
      case 'PUT':
        console.log("a put call was made");
        return await putHandler(request);
      case 'DELETE':
        console.log("a delete call was made");
        return await deleteHandler(request);
      default:
        send(response, 405, 'Invalid');
        break;
    }
  } catch (error){
    throw error;
  }
}