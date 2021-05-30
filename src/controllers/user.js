const userRouter = require('express').Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');

userRouter.get('/', async(req, res) => {
  const users = await User.find({});
  res.json(users);
});

userRouter.post('/create-user', async(req, res, next) => {
  const {
    name, lastName, motherLastName, phone, email, userName, password
  } = req.body;
  try {
    const passwordHash = await bcrypt.hash(password, 10);

    if (!(name && lastName && motherLastName && phone && email &&
      userName && password)
    ) {
      return res.status(400).json({
        error: 'All parameters are required'
      });
    }
    const newUser = new User({
      name, lastName, motherLastName, phone,
      email, userName, password: passwordHash,
      date: new Date()
    });
    const savedUser = await newUser.save();
    res.send(savedUser);
  } catch (err) {
    next(err);
  }
});

userRouter.put('/edit/:id', async(req, res, next) => {
  const {
    name, lastName, motherLastName, phone, email, userName, password
  } = req.body;
  const { id } = req.params;
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    if (!(name && lastName && motherLastName && phone && email &&
      userName && password)
    ) {
      return res.status(400).json({
        error: 'All parameters are required'
      });
    }
    const editUser = {
      name, lastName, motherLastName, phone,
      email, userName, password: passwordHash
    };
    const savedChangeUser = await User.findByIdAndUpdate(id, editUser, {new: true});
    res.send(savedChangeUser);
  } catch (err) {
    next(err);
  }
});

module.exports = userRouter;