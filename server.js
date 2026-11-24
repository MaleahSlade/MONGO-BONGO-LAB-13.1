import 'dotenv/config';
import express from 'express';
import { MongoClient } from 'mongodb';

//express() creates your server app; port is the "door number"
//where it listens for visitors 
const app = express();
const PORT = 3001;

//Sets up the MONGODB client
const client = new MongoClient(process.env.MONGO_URI);

//The GET Route
app.get('/', async (req, res) => {
try {
await client.connect();
res.json({ message: 'Successfully connected to Maleah\'s database!' });
} catch (error) {
console.error('Connection error:', error);
res.status(500).json({ message: 'Failed to connect to Maleah\'s database.' });
}
});


