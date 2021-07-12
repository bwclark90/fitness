const router = require('express').Router()
const { Exercise, Workout } = require('../models')

// get 
router.get('/exercises', (req, res) => {
  Exercise.find()
    .populate('workout')
    .then(exercises => res.json(exercises))
    .catch(err => console.log(err))
})

// create a new exercise
router.post('/exercises', (req, res) => {
  Exercise.create(req.body)
    .then(exercise => {
      Workout.findByIdAndUpdate(exercise.workout, { $push: { exercises: exercise._id } })
        .then(_ => res.json(exercise))
        .catch(err => console.log('error', err))
    })
    .catch(err => console.log('error', err))
})

// update an existing exercise
router.put('/exercises/:id', (req, res) => {
  Exercise.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(_ => res.sendStatus(200))
    .catch(err => console.log(err))
})

// delete an exercise
router.delete('/exercises/:id', (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log('error', err))
})

module.exports = router