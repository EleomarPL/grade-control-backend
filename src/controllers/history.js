const historyRouter = require('express').Router();
const History = require('../models/History');
const User = require('../models/User');
const userStractor = require('../middlewares/userStractor');

historyRouter.get('/', userStractor, async(req, res) => {
  const {userId: id} = req;
  const getQualifications = await History.find({user: id});
  res.send(getQualifications);
});

historyRouter.post('/create-history', userStractor, async(req, res, next) => {
  const { operation } = req.body;
  const {userId: id} = req;

  const getUser = await User.findById(id);
  try {
    if (!operation ) {
      return res.status(400).json({
        error: 'All parameters are required'
      });
    }
    const newHistory = new History({
      operation,
      user: getUser._id
    });

    const savedHistory = await newHistory.save();
    res.send(savedHistory);

  } catch (err) {
    next(err);
  }
});

historyRouter.delete('/delete/:id', userStractor, (req, res, next) => {
  const { id } = req.params;

  History.findByIdAndRemove(id).then(() => {
    res.status(204).end();
  }).catch(err => {
    next(err);
  });
});


module.exports = historyRouter;