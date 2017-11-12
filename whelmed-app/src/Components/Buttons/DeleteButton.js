import React from 'react';
import { Button } from 'react-bootstrap';
import './Buttons.css';

const DeleteButton = (props) =>{
    return (
        <Button bsClass='btn-delete '>
            X
        </Button>
    );
}

export default DeleteButton;