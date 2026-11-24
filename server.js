import 'dotenv/config';
import express from 'express';
import { MongoClient } from 'mongodb';

//express() creates your server app; port is the "door number"
//where it listens for visitors 
const app = express();
const PORT = 3001;

//Sets up the MONGODB client
const client = new MongoClient(process.env.MONGO_URI);

