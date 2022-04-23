const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'todoDB';

// write single doc in collection
(async () => {
    const client = await MongoClient.connect(MONGO_URL);
    const tododb = client.db(DB_NAME);
    
    const todos = tododb.collection('todos');

    const todo = {
        task : 'an imp task',
        priority: 2,
        owner: 'manager'
    }

    const res = await todos.insertOne(todo);
    console.log(res);

    console.log(await todos.find({}).toArray());
})();

// write multi docs in collections
(async () => {
    const client = await MongoClient.connect(MONGO_URL);
    const tododb = client.db(DB_NAME);
    
    const todos = tododb.collection('todos');

    const todo = [{
        task : 'an imp task',
        priority: 1,
        owner: 'manager'
    },
    {
        task : 'an imp task',
        priority: 3,
        owner: 'manager'
    },

    ]

    const res = await todos.insertMany(todo);
    console.log(res);

    console.log(await todos.find({}).toArray());
})();