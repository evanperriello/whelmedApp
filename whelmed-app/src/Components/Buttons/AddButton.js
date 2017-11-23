import React from 'react';
import './Buttons.css';
import {Glyphicon} from 'react-bootstrap';

const AddButton = (props) =>{
    return (
        <button type='submit' className='.btn btn-add'>
            <Glyphicon glyph='plus'/>
        </button>
    );
};

export default AddButton;
