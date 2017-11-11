import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import './SkipButton.css';

const SkipButton = (props) =>{
    return (
        <Button bsClass='btn-skip btn-circle'>
            <Glyphicon glyph='step-forward'/>
        </Button>
    );
}

export default SkipButton;