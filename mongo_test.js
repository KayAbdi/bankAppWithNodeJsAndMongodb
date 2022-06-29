const MongoClient = require('mongodb').MongoClient;
const url         = 'mongodb://localhost:27017';

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client){
    console.log('connected!!');

    //database name
    const dbName  = 'myFirstMongoProject';
    const db = client.db(dbName);

    //new user
    var name = 'user' + Math.floor(Math.random()*10000);
    var email = name + '@uic.edu';

    //insert into customer table
    var collection = db.collection('customers');
    var doc = {name, email};
    collection.insertOne(doc, {w:1}, function(err, result){
        console.log('Document insert');
    });

    // read back
    var customer = db
        .collection('customers')
        .find()
        .toArray
        (function(err, docs){
            console.log('Collection:',docs);

            //clean up
            client.close();
        });
});