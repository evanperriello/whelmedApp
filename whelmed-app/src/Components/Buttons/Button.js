import React from 'react';
import './Buttons.css';

const Button = (props) =>{
    let text;
    switch (props.type) {
        case 'add':
            text = "+";
            break;
        case 'complete':
            text = "V";
            break;
        case 'skip':
            text = ">>";
            break;
        case 'delete':
            text = "X";
            break;
        default:
            text= '';  
    }

    return (
        <button type='submit' className={"btn btn-circle btn-" + props.type}>
            {text}
        </button>
    );
};

export default Button;