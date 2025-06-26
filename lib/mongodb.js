import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
    throw new Error('Add Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri); 
        global._mongoClientPromise = client.connect();// global mongodb client promise 
    // so it can be reused in development mode and no need to create a new connection
    // every time for separate requests
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri); 
    clientPromise = client.connect();
}

export default clientPromise;
