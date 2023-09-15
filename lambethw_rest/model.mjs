import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/exercise_db");
const db = mongoose.connection;

db.once('open', () => {
    console.log("DB connection open.");
});

const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, enum: ['kgs', 'lbs'], required: true },
    date: { type: String, required: true }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

const createExercise = async (name, reps, weight, unit, date) => {
    const exercise = Exercise({ name: name, reps: reps, weight: weight, unit: unit, date: date });
    return exercise.save();
}

const retrieveExercises = async () => {
    const query = Exercise.find();
    return query.exec();
}

const updateExercise = async (id, newData) => {
    const query = { _id: id };
    const result = await Exercise.findOneAndUpdate(query, newData, { new: true });
    return result;
}

const deleteExercise = async (id) => {
    const query = { _id: id };
    const result = await Exercise.findByIdAndDelete(query);
    return;
}

export { createExercise, retrieveExercises, updateExercise, deleteExercise };