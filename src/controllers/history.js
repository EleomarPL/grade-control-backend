const historyRouter = require('express').Router();
const History = require('../models/History');
const User = require('../models/User');
const userStractor = require('../middlewares/userStractor');

const NAME_LOG = 'HISTORY';
const {
  logGet, logCreate, logDelete,
  logErrorCreate, logErrorDelete
} = require('../utils/logsTypes');

historyRouter.get('/', userStractor, async(req, res) => {
  const {userId: id} = req;
  const getQualifications = await History.find({user: id});
  logGet({ object: NAME_LOG });
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
    logCreate({ object: NAME_LOG, id });
    res.send(savedHistory);
  } catch (err) {
    logErrorCreate({ object: NAME_LOG });
    next(err);
  }
});

historyRouter.delete('/delete/:id', userStractor, (req, res, next) => {
  const { id } = req.params;

  History.findByIdAndRemove(id).then(() => {
    logDelete({ object: NAME_LOG, id });
    res.status(204).end();
  }).catch(err => {
    logErrorDelete({ object: NAME_LOG });
    next(err);
  });
});


module.exports = historyRouter;