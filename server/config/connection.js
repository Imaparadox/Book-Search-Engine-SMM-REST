const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });
// const URI = process.env.MONGODB_URL;
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/googlebooks',
  err => {
    if (err) throw err;
    console.log('connected to MongoDB')
  });
module.exports = mongoose.connection;
