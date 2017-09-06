var express = require('express');
app = express(),
    bodyParser = require('body-parser'),
    mongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/angular2');
var db = mongoose.connection;


app.use(express.static('app'));

app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html');
});

var conn_str = 'mongodb://localhost:27017/angular2',
    mongo_conn = '';
mongoClient.connect(conn_str, function(err, db) {
    if(!err) {
        mongo_conn = db;
        app.listen(8081, function() {
            console.log('Server running @ localhost:8081');
        });
    } else {
        console.log('DB connection error!!!');
    }
});

app.get('/entries', function(req, res) {
    db.collection('products').find({}).toArray(function(err, doc){
        temp = doc;
        res.json(temp);
    });

});


app.get('/singleEntry', function(req, res) {
    console.log(req);
    db.collection('products').find({
        "productId": 1
    }).toArray(function(err, doc1){
        temp = doc1;
        res.json(temp);
    });

});
