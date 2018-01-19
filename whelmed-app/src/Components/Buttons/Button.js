import React from 'react';
import './Buttons.css';

const Button = (props) =>{

    return (
        <button type='submit' className={"btn btn-" + props.type}>
        </button>
    );
};

export default Button;