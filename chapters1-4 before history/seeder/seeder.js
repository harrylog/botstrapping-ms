// seeder.js
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const url = 'mongodb://db:27017';
const dbName = 'video-streaming';

const data = [
  {
    "_id": ObjectId("5d9e690ad76fe06a3d7ae416"),
    "videoPath": "SampleVideo_1280x720_1mb.mp4"
  }
  // Add more documents as needed
];

async function seedData() {
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection('videos');

    const result = await collection.insertMany(data);
    console.log(`${result.insertedCount} documents inserted`);

    client.close();
  } catch (err) {
    console.error("An error occurred while seeding the database:");
    console.error(err);
  }
}

seedData();