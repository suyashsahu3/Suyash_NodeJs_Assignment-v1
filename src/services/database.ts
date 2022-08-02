import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { users?: mongoDB.Collection } = {}

export async function connectToDatabase () {
    dotenv.config();
    var uri='mongodb+srv://test1:test@1234@cluster0.ogt46.mongodb.net/?retryWrites=true&w=majority';
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(uri);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
   
    const usersCollection: mongoDB.Collection = db.collection('users');
 
  collections.users = usersCollection;
       
         console.log(`Successfully connected to database: ${db.databaseName} and collection: ${usersCollection.collectionName}`);
 }