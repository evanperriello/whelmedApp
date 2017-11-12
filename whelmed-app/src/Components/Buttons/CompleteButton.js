import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import './Buttons.css';

const CompleteButton = (props) =>{
    return (
        <Button bsClass='btn-complete btn-circle'>
            <Glyphicon glyph='ok'/>
        </Button>
    );
}

export default CompleteButton;