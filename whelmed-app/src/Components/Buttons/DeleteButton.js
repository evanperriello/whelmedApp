import React from 'react';
import { Button } from 'react-bootstrap';
import './DeleteButton.css';

const DeleteButton = (props) =>{
    return (
        <Button bsClass='btn-delete '>
            X
        </Button>
    );
}

export default DeleteButton;