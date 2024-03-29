const userRouter = require('express').Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');
const userStractor = require('../middlewares/userStractor');

const {
  logGet, logCreate, logUpdate, logDelete,
  logErrorCreate, logErrorUpdate, logErrorDelete
} = require('../utils/logsTypes');
const NAME_LOG = 'USER';

userRouter.get('/', userStractor, async(req, res) => {
  const {userId: id} = req;

  const user = await User.findById(id);

  logGet({ object: NAME_LOG });
  res.json(user);
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
    logCreate({ object: NAME_LOG, id: savedUser.id });
    res.send(savedUser);
  } catch (err) {
    logErrorCreate({ object: NAME_LOG});
    next(err);
  }
});

userRouter.put('/edit-data/', userStractor, async(req, res, next) => {
  const {
    name, lastName, motherLastName, phone, email, userName
  } = req.body;
  const {userId: id} = req;
  try {
    if (!(name && lastName && motherLastName && phone && email &&
      userName)
    ) {
      return res.status(400).json({
        error: 'All parameters are required'
      });
    }
    const editUser = {
      name, lastName, motherLastName, phone,
      email, userName
    };
    const savedChangeUser = await User.findByIdAndUpdate(id, editUser, {new: true});
    logUpdate({ object: NAME_LOG, id });
    res.send(savedChangeUser);
  } catch (err) {
    logErrorUpdate({ object: NAME_LOG });
    next(err);
  }
});

userRouter.put('/edit-password/', userStractor, async(req, res, next) => {
  const {
    oldPassword, newPassword
  } = req.body;
  const {userId: id} = req;
  try {
    if (!(oldPassword && newPassword)) {
      return res.status(400).json({
        error: 'All parameters are required'
      });
    }
    const findUser = await User.findById(id);
    const passwordUser = findUser === null
      ? false
      : await bcrypt.compare(oldPassword, findUser.password);
    if (!(passwordUser && findUser)) {
      return res.status(401).json({
        error: 'Invalid password'
      });
    }
    const passwordHash = await bcrypt.hash(newPassword, 10);

    const editUser = {
      password: passwordHash
    };
    const savedChangeUser = await User.findByIdAndUpdate(id, editUser, {new: true});
    logUpdate({ object: NAME_LOG, id });
    res.send(savedChangeUser);
  } catch (err) {
    logErrorUpdate({ object: NAME_LOG });
    next(err);
  }
});

userRouter.delete('/delete', userStractor, (req, res, next) => {
  const {userId: id} = req;

  User.findByIdAndRemove(id).then(() => {
    logDelete({ object: NAME_LOG, id });
    res.status(204).end();
  }).catch(err => {
    logErrorDelete({ object: NAME_LOG });
    next(err);
  });
});

module.exports = userRouter;