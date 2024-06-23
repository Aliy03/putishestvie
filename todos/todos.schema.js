const { Schema } = require('mongoose');

const kategorieSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt : {
    type: Date,
    default: Date.now,
  }
});

module.exports = {
  kategorieSchema,
}