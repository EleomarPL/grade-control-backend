const qualificationRouter = require('express').Router();
const Qualification = require('../models/Qualification');
const User = require('../models/User');
const userStractor = require('../middlewares/userStractor');

const NAME_LOG = 'QUALIFICATION';
const {
  logGet, logCreate, logDelete,
  logErrorCreate, logErrorDelete, logUpdate, logErrorUpdate
} = require('../utils/logsTypes');

qualificationRouter.get('/', userStractor, async(req, res) => {
  const {userId: id} = req;
  const getQualifications = await Qualification.find({user: id});
  logGet({ object: NAME_LOG });
  res.send(getQualifications);
});

qualificationRouter.post('/create-qualification/', userStractor, async(req, res, next) => {
  const {
    course, unit, score, semester
  } = req.body;
  const {userId: id} = req;

  const getUser = await User.findById(id);
  try {
    if (!(course && unit && score && semester)) {
      return res.status(400).json({
        error: 'All parameters are required'
      });
    }
    const newQualification = new Qualification({
      course,
      unit,
      score,
      semester,
      user: getUser._id
    });

    const savedQualification = await newQualification.save();
    logCreate({ object: NAME_LOG, id });
    res.send(savedQualification);
  } catch (err) {
    logErrorCreate({ object: NAME_LOG });
    next(err);
  }
});

qualificationRouter.put('/edit/:id', userStractor, async(req, res, next) => {
  const {
    course, unit, score, semester
  } = req.body;
  const {id} = req.params;

  try {
    if (!(course && unit && score && semester)) {
      return res.status(400).json({
        error: 'All parameters are required'
      });
    }
    const newQualification = {
      course, unit, score, semester
    };

    const savedQualification =
      await Qualification.findByIdAndUpdate(id, newQualification, {new: true});
    logUpdate({ object: NAME_LOG, id });
    res.send(savedQualification);

  } catch (err) {
    logErrorUpdate({ object: NAME_LOG });
    next(err);
  }
});

qualificationRouter.delete('/delete/:id', userStractor, (req, res, next) => {
  const { id } = req.params;

  Qualification.findByIdAndRemove(id).then(() => {
    logDelete({ object: NAME_LOG, id });
    res.status(204).end();
  }).catch(err => {
    logErrorDelete({ object: NAME_LOG });
    next(err);
  });
});

module.exports = qualificationRouter;