const {Schema, model} = require('mongoose');

const quealificationSchema = new Schema({
  operation: {
    type: String,
    minlength: 1,
    maxlength: 400
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

const History = model('History', quealificationSchema);

module.exports = History;