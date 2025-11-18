const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 80;

const uri = `mongodb+srv://${process.env.USUARIO_MONGO}:${process.env.CONTRASENA_MONGO}@${process.env.MONGOHOST}`;

// Create a MongoClient instance
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect to MongoDB
    await client.connect();

    // Select database and collection
    const db = client.db('ClientesSorteo');
    const collection = db.collection('users');
    const winnerCollection = db.collection('Ganador');

    // Middleware to parse JSON
    app.use(express.json());

    // Serve static files from the "public" directory
    app.use(express.static('public'));

    // Example: Get all users
    app.get('/users', async (req, res) => {
      const users = await collection.find().toArray();
      res.json(users);
    });

    // Example: Add a user
    app.post('/users', async (req, res) => {
      const newUser = req.body;
      await collection.insertOne(newUser);
      res.json({ message: 'User added successfully', user: newUser });
    });

    //Añadir Ganador
    app.post('/ganador', async (req, res) => {
      const ganador = req.body;
      await winnerCollection.insertOne(ganador);
      res.json({ message: "Ganador guardado correctamente", ganador });
    });

    //obtener ganador
     app.get('/ganador', async (req, res) => {
      const ganador = await winnerCollection.findOne({}, { sort: { _id: -1 } });
      res.json(ganador);
    });

    // Start server
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

main();