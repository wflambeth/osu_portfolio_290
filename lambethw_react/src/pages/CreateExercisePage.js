import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const CreateExercisePage = () => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState("kgs");
    const [date, setDate] = useState('');

    const history = useHistory();

    const createExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 201) {
            alert("Exercise saved");
        }
        else {
            alert(`Failed to save exercise. HTTP ${response.status}`);
        }
        history.push('/');

    };

    return (
        <div>
            <h1>Add New Exercise</h1>
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}></input>
            <input type="number" placeholder="Reps" value={reps} onChange={e => setReps(e.target.value)}></input>
            <input type="number" placeholder="Weight" value={weight} onChange={e => setWeight(e.target.value)}></input>
            <select value={unit} onChange={e => setUnit(e.target.value)}>
                <option value="kgs">Kilograms</option>
                <option value="lbs">Pounds</option>
            </select>
            <input type="text" placeholder="Date" value={date} onChange={e => setDate(e.target.value)}></input>
            <button onClick={createExercise}>Add</button>
        </div>
    );
}

export default CreateExercisePage;