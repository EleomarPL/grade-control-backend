const mongoose = require('mongoose');

const stringConnection = process.env.STRING_CONNECTION;

mongoose.connect(stringConnection, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).
  then(() => {
    console.log('conectado');
  }).catch((err) => {
    console.log(err);
  });