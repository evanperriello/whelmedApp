import React from 'react';
import './NewTask.css';
import AddButton from '../Buttons/AddButton';


const NewTask = ()=>{
    return (
        <div class='new-task-input'>
            <input placeholder='Add a new item'/>
            <AddButton/>
        </div>
    );
}

export default NewTask;