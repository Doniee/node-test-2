// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log(`Unable to connect to MongoDB server`);
    }
    console.log(`Connected to MongoDB server`);
    const db = client.db('TodoApp');

    // db.collection('Todos')
    //   .find({
    //     _id: new ObjectID('5ba20898547b560e71eff2b5')
    //   })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log(`Todos`);
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     erro => {
    //       console.log(`Unable to fetch todos`);
    //     }
    //   );

    // db.collection('Todos')
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`Todos count: ${count}`);
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     erro => {
    //       console.log(`Unable to fetch todos`, err);
    //     }
    //   );

    db.collection('Users')
      .find({ name: 'Andrew' })
      .toArray()
      .then(
        docs => {
          console.log(JSON.stringify(docs, undefined, 2));
        },
        erro => {
          console.log(`Unable to fetch users`, err);
        }
      );

    // client.close();
  }
);
