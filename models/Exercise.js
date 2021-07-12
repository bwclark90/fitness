const { model, Schema } = require('mongoose')

const Exercise = new Schema({
  type: String,
  name: String,
  duration: Number,
  weight: Number,
  sets: Number,
  reps: Number,
  workout: {
    type: Schema.Types.ObjectId,
    ref: 'Workout'
  }
})

module.exports = model('Exercise', Exercise)