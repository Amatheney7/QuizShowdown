var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const db = require('./Db/dbConfig.js');
// const User = require('./db/Schema/user.js');
app = express();
app.use(serveStatic(__dirname));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/signUp', (req, res) => {
//   var username = req.body.username;
//   var password = req.body.password;


//   User.findOne({ username: username })
//       .exec(function (err, found) {
//           if (!found) {
//               let user = new User({
//                   username: username,
//                   password: password
//               });
//               user.save((err, success) => {
//                   if (err) {
//                       console.log(err);
//                   } else {
//                       console.log('Welcome to the Game')
//                       res.end();
                      
//                   }

//               })
//           } else {

        
//             res.end();

//           }
//       });

// });