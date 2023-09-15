import React from 'react';
import { VscEdit, VscTrash } from 'react-icons/vsc';

function Exercise({ exercise, onDelete, onEdit }) {

    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><VscEdit onClick={() => onEdit(exercise)} /></td>
            <td><VscTrash onClick={() => onDelete(exercise._id)} /></td>
        </tr>
    );
}

export default Exercise;