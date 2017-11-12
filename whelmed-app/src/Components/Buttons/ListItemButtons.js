import React from 'react';
import CompleteButton from '../Buttons/CompleteButton';
import SkipButton from '../Buttons/SkipButton';
import DeleteButton from '../Buttons/DeleteButton';
import './ListItemButtons.css';


const ListItemButtons = (props)=>{
    return (
            <ul className='list-item-buttons'>
                <li><CompleteButton/></li>
                <li><SkipButton/></li>
                <li><DeleteButton/></li>
            </ul>
    );
}
export default ListItemButtons;