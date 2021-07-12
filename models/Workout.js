const { model, Schema } = require('mongoose')

const Workout = new Schema({
  day: Date,
  exercises: [{
    type: {
      type: String
    },
    name: String,
    duration: Number,
    weight: Number,
    sets: Number
    reps: Number,
  }]
})

module.exports = model('Workout', Workout)