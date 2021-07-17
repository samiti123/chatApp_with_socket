const mongo = require('mongodb').MongoClient;
const client = require('socket.io').listen(4000).sockets;
const app = mongodb();

// connect to mongo
mongo.connect('mongodb://127.0.0.1/mongochat', function (err, db) {
  if (err) {
    throw err;
  }

  console.log('mongoDB connected...');

  // connect to socket.io
  // creating function () => {} and function(){} are both the same
  client.on('connection', () => {
    let chat = db.collection('chats');
  });
});
