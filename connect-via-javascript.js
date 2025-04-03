const { MongoClient } = require('mongodb');

async function listFilteredCollections() {
    const uri = 'mongodb://localhost:27017/';
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('coolDb');
        const collections = await database.listCollections().toArray();

        const filteredCollections = collections
            .map(collection => collection.name)
            .filter(name => !name.endsWith('2023'));

        console.log('Collections not ending with 2023:', filteredCollections);
    } finally {
        await client.close();
    }
}

listFilteredCollections().catch(console.error);