const {Schema, model} = require('mongoose');

const quealificationSchema = new Schema({
  course: {
    type: String,
    minlength: 1,
    maxlength: 40
  },
  unit: {
    type: Number,
    min: 1,
    max: 15
  },
  score: {
    type: Number,
    min: 0,
    max: 100
  },
  semester: {
    type: Number,
    min: 0,
    max: 15
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

quealificationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Qualification = model('Qualification', quealificationSchema);

module.exports = Qualification;