const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'todoDB';

(async () => {
    const client = await MongoClient.connect(MONGO_URL);
    const tododb = client.db(DB_NAME);
    console.log(tododb);
})();