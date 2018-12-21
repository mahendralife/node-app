
const mongoose            = require('mongoose');
exports.connect = () => {
const DB_CONNECTION = 'mongodb://' + process.env.db_user + ':' + encodeURIComponent(process.env.db_password) + '@'+ process.env.db_url+ '/' + process.env.db_name;
// const DB_CONNECTION = 'mongodb://mahendra:'+ encodeURIComponent('mahendra@8822') +'@ds026558.mlab.com:26558/vipapp';

mongoose.connect(DB_CONNECTION, { useNewUrlParser: true });

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + process.env.db_url);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

}
