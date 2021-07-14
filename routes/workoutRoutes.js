const router = require('express').Router()
const { Workout } = require('../models')

// get all
router.get('/workouts', (req, res) => {
  console.log(1)
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration'
        }
      }
    }
  ])
    .then(workouts => res.json(workouts))
    .catch(err => console.log('error in get all workouts:', err))
})

// add
router.put('/workouts/:id', (req, res) => {
  console.log(2)
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then(_ => {
      console.log(req.body)
      res.json(_)
    })
    .catch(err => console.log(err))
})

// create 
router.post('/workouts', (req, res) => {
  console.log(3)
  // const newWorkout = {
  //   ...req.body,
  //   day: new Date(new Date().setDate(new Date().getDate()))
  // }
  // console.log('newWorkout', newWorkout)
  Workout.create(req.body)
    .then(workout => res.json(workout))
    .catch(err => console.log('Error', err))
})


router.get('/workouts/range', (req, res) => {
  console.log(4)
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration'
        }
      }
    }
  ])
    .then(workouts => {
      const sevenDayWorkout = []
      if (workouts.length > 7) {
        for (let i = 0; i < 7; i++) {
          sevenDayWorkout.push(workouts[i + workouts.length - 7])
        }
      }
      res.json(sevenDayWorkout)
    })
    .catch(err => console.log(err))
})

//delete
router.delete('/workouts/:id', (req, res) => {
  console.log(5)
  Workout.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log('error ', err))
})

module.exports = router