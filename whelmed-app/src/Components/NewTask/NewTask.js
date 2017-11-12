import React from 'react';
import './NewTask.css';
import {Glyphicon} from 'react-bootstrap';

const NewTask = ()=>{
    return (
        <div class='new-task-input'>
            <input placeholder='Add a new item'/>
            <button className='.btn btn-add'>
                <Glyphicon glyph='plus'/>
            </button>
        </div>
    );
}

export default NewTask;