require('dotenv').config();
require('./mongo');

const express = require('express');
const cors = require('cors');

const userRouter = require('./controllers/user');
const qualificationRouter = require('./controllers/qualification');
const loginRouter = require('./controllers/login');

const notFound = require('./middlewares/notFound');
const handleErros = require('./middlewares/handleErrors');

const app = express();

app.use(cors());
app.use(express.json());

app.set('port', process.env.PORT || 4000);

app.use('/api/users', userRouter);
app.use('/api/qualifications', qualificationRouter);
app.use('/api/login', loginRouter);

app.use(notFound);
app.use(handleErros);

app.listen(app.get('port'), () => {
  console.log('Servidor en puerto ' + app.get('port'));
});