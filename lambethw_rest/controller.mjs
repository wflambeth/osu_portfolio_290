import express from 'express';
import bodyParser from 'body-parser';
import * as exercisedb from './model.mjs';
const app = express();
const PORT = 3000;

app.use(bodyParser());

const errHandler = error => res.status(500).json(error);

app.post('/exercises', (req, res) => {
    exercisedb.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => res.status(201).json(exercise))
        .catch(error => res.status(500).json(error));
});

app.get('/exercises', (req, res) => {
    exercisedb.retrieveExercises()
        .then(exercises => res.status(200).json(exercises))
        .catch(error => res.status(500).json(error));
});

app.put('/exercises/:id', (req, res) => {
    const newData = { name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date }
    exercisedb.updateExercise(req.params.id, newData)
        .then(exercise => res.status(200).json(exercise))
        .catch(error => res.status(500).json(error));
});

app.delete('/exercises/:id', (req, res) => {

    exercisedb.deleteExercise(req.params.id)
        .then(exercise => res.status(204).end())
        .catch(error => res.status(500).json(error));
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
});