import React from 'react';
import ListItemButtons from '../Buttons/ListItemButtons';
import './ListItem.css';

const ListItem = (props)=>{
    return (
        <div className='list-item'>
            <div className='item-description'><p>{props.item}</p></div>
            <div className='item-controls'><ListItemButtons/></div>
        </div>
    );
}

export default ListItem;