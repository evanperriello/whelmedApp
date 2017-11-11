import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import './CompleteButton.css';

const CompleteButton = (props) =>{
    return (
        <Button bsClass='btn-complete btn-circle'>
            <Glyphicon glyph='ok'/>
        </Button>
    );
}

export default CompleteButton;