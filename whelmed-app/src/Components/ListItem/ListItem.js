import React from 'react';
import ListItemButtons from '../Buttons/ListItemButtons';
import './ListItem.css';

const ListItem = (props)=>{
    return (
        <div className='list-item'>
            <p>{props.item}</p>
            <ListItemButtons/>
        </div>
    );
}

export default ListItem;