const { model, Schema } = require('mongoose')

//workout model
const Workout = new Schema({
  day: {type: Date, default: Date.now},
  exercises: [{
    
    type: {type: String},
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }]
})

module.exports = model('Workout', Workout)