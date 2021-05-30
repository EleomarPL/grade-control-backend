const {Schema, model} = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 40
  },
  lastName: {
    type: String,
    minlength: 2,
    maxlength: 40
  },
  motherLastName: {
    type: String,
    minlength: 2,
    maxlength: 40
  },
  phone: {
    type: String,
    minlength: 10,
    maxlength: 14
  },
  email: {
    type: String,
    minlength: 10,
    maxlength: 40
  },
  userName: {
    type: String,
    minlength: 6,
    maxlength: 40,
    unique: true
  },
  password: String,
  date: Date,
  qualifications: [{
    type: Schema.Types.ObjectId,
    ref: 'Qualification'
  }]
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;

    delete returnedObject.password;
  }
});
userSchema.plugin(uniqueValidator);

const User = model('User', userSchema);

module.exports = User;