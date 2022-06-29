const express = require('express');
const app     = express();
const cors    = require('cors');
var dal       = require('./dal.js');

// serve static files from the public directory
app.use(express.static('public'));
// now use cors to prevent permission errors
app.use(cors());

// create user route
app.get('/account/create/:name/:email/:password', function(req,res){
    // else create user
    dal.create(req.params.name,req.params.email,req.params.password).
        then((user) => {
            console.log(user);
            res.send(user);
        });
    
});

// login route
// app.get('/account/login/:email/:password', function(req,res){
//     res.send({
//         email:    req.params.email,
//         password: req.params.password
//     });
// });

// all accounts
app.get('/account/all', function(req,res){
    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
        });
});

const port = 3000;
app.listen(port, function(){
    console.log('Running on post: ' + port);
})