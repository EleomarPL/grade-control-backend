const userRouter = require('express').Router();

userRouter.get('/', async(req, res) => {
  res.send('Hola mundo');
});

module.exports = userRouter;