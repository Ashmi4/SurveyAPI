var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/registeruser');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    // code to be executed when connection successful


});

// register schema

var registerSchema = mongoose.Schema({
      firstname     :    String,
      lastname    :    String,
      email:    String,
      password: String,
      phonenumber  :    String
    });

 var register = mongoose.model('register', registerSchema, 'registeruser');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function (req, res) {

console.log(req.body)
console.log("Post request received")


var register1 = new register(req.body);


register1.save(function (err, register) {
      if (err) return console.error(err);
      console.log(register.email + " saved to the collection.");
    });


});


module.exports = router;
