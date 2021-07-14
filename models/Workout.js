const { model, Schema } = require('mongoose')

//workout model
const Workout = new Schema({
  day: Date,
  exercises: [{
    type: {
      type: String
    },
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
  }]
})

module.exports = model('Workout', Workout)