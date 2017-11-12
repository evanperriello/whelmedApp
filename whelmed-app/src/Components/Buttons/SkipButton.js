import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import './Buttons.css';

const SkipButton = (props) =>{
    return (
        <Button bsClass='btn-skip btn-circle'>
            <Glyphicon glyph='step-forward'/>
        </Button>
    );
}

export default SkipButton;