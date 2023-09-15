import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const EditExercisePage = ({ exerciseToEdit }) => {
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();

    const editExercise = async () => {
        const updatedExercise = { name, reps, weight, unit, date };
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedExercise),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200) {
            alert('Exercise update successful.');
        }
        else {
            alert(`Unable to update exercise. HTTP ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <h1>Edit Exercise</h1>
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}></input>
            <input type="number" placeholder="Reps" value={reps} onChange={e => setReps(e.target.value)}></input>
            <input type="number" placeholder="Weight" value={weight} onChange={e => setWeight(e.target.value)}></input>
            <select value={unit} onChange={e => setUnit(e.target.value)}>
                <option value="kgs">Kilograms</option>
                <option value="lbs">Pounds</option>
            </select>
            <input type="text" placeholder="Date" value={date} onChange={e => setDate(e.target.value)}></input>
            <button onClick={editExercise}>Submit changes</button>
        </div>
    );
}

export default EditExercisePage;