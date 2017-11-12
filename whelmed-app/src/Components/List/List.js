import React from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css'
const List = (props)=>{
    const listItems = props.lists.map((item)=>{
        return <li key={item.id}><ListItem text={item.text}/></li> 
    });
    return (
        <div className='list'>
            <h2 className='list-title'>{props.title}</h2>
            <ul>{listItems}</ul>
        </div>
    );

}

export default List;