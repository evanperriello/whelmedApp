import React from 'react';
import ListItem from '../ListItem/ListItem';
import NewTask from '../NewTask/NewTask';
import './List.css'
const List = (props)=>{
    const listItems = props.lists.map((item)=>{
        return <li key={item.id}><ListItem text={item.text}/></li> 
    });

    return (
        <div className='list'>
            <h2 className='list-title'>{props.title}</h2>
            <p className='number-done'>{props.numberDone} steps completed</p>
            <ul>{listItems}
                <NewTask/>
            </ul>
        </div>
    );

}

export default List;