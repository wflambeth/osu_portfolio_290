import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setExerciseToEdit }) {
    const [exercises, setExercises] = useState([]);
    const history = useHistory();

    const loadExercises = async () => {
        const res = await fetch('/exercises');
        const values = await res.json();
        setExercises(values);
    };

    const onDelete = async exerciseId => {
        const response = await fetch(`/exercises/${exerciseId}`, { method: 'DELETE' });
        if (response.status === 204) {
            const exercisesUpdated = exercises.filter(ex => ex._id !== exerciseId);
            setExercises(exercisesUpdated);
        }
        else {
            console.error(`Deletion failure for exercise with ID ${exerciseId}. HTTP ${response.status}`);
        }
    };

    const onEdit = async exerciseToEdit => {
        setExerciseToEdit(exerciseToEdit);
        history.push('/edit');
    }

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
            <div id="home-parent">
                <h2>Logged Exercises</h2>
                <ExerciseList exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseList>
                <Link to="/add">Add new exercise</Link>
            </div>
        </>
    );
}

export default HomePage;