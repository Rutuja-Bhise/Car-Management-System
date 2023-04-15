const express = require('express');
const router = express.Router();

let cars = [];

// Add a new car to the array
router.post('/create', (req, res) => {
  const car = req.body;
  cars.push(car);
  res.send(car);
});

// Get all cars from the array
router.get('/', (req, res) => {
  res.send(cars);
});

// Get a specific car from the array by id
router.get('/:id', (req, res) => {
  const car = cars.find(c => c.id === parseInt(req.params.id));
  if (!car) res.status(404).send('Car not found');
  res.send(car);
});

// Update a specific car in the array by id
router.put('/:id', (req, res) => {
  const car = cars.find(c => c.id === parseInt(req.params.id));
  if (!car) res.status(404).send('Car not found');

  car.name = req.body.name;
  car.color = req.body.color;
  car.price = req.body.price;

  res.send(car);
});

// Delete a specific car from the array by id
router.delete('/:id', (req, res) => {
  const car = cars.find(c => c.id === parseInt(req.params.id));
  if (!car) res.status(404).send('Car not found');

  const index = cars.indexOf(car);
  cars.splice(index, 1);

  res.send(car);
});

module.exports =  router;