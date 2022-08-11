const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://deploy:admin@cluster0.mlvgbao.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("apptarefas").collection("tasks");
  // perform actions on the collection object
  client.close();
});


module.exports = mongoose.connect(uri)