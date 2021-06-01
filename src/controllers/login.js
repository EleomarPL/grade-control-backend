const loginRouter = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

loginRouter.post('/', async(req, res) => {
  const {userName = ' ', password = ''} = req.body;

  const findUser = await User.findOne({userName});
  const passwordUser = findUser === null
    ? false
    : await bcrypt.compare(password, findUser.password);

  if (!(passwordUser && findUser)) {
    return res.status(401).json({
      error: 'Invalid user or password'
    });
  }
  const userForToken = {
    id: findUser._id,
    user: findUser.userName
  };

  const token = jwt.sign(userForToken, process.env.WORD_SECRET);
  res.send({
    name: findUser.name,
    lastName: findUser.lastName,
    motherLastName: findUser.motherLastName,
    phone: findUser.phone,
    email: findUser.email,
    userName: findUser.userName,
    token
  });

});

module.exports = loginRouter;