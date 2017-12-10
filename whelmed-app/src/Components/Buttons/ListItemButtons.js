import React from 'react';
import Button from './Button';
import './ListItemButtons.css';


const ListItemButtons = (props)=>{
    return (
            <ul className='list-item-buttons'>
                <li><Button type='complete'/></li>
                <li><Button type='skip'/></li>
                <li><Button type='delete'/></li>
            </ul>
    );
}
export default ListItemButtons;