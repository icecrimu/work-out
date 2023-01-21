const express = require('express');
const router = express.Router();

const Workout = require('../models/workoutModel');

// GET all workouts
router.get('/', (req, res) => {
  res.json({
    message: 'GET all workouts'
  });
});

// GET single workout
router.get('/:id', (req, res) => {
  res.json({
    message: 'GET single workout'
  });
});

// POST a new workout
router.post('/', async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    console.log(error);
  }
});

// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({ message: 'DELETE a workout' });
});

// UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({ message: 'UPDATE a workout' });
});

module.exports = router;
