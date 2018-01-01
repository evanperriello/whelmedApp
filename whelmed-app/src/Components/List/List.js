import React from 'react';
import ListItem from '../ListItem/ListItem';
import NewTask from '../NewTask/NewTask';
import './List.css';
const List = (props)=>{
    let listItems = [];
    for (var itemKey in props.listItems){
        if (props.listItems.hasOwnProperty(itemKey)){
            listItems.push(<li key={itemKey}><ListItem text={props.listItems[itemKey]}/></li>);
        }
    }
    //use the 'show' prop to restrict the number of items that render for the mini list (for the full list, this will not exist)
    if (props.show){
        listItems = listItems.slice(0, props.show);
    }
    return (
        <div className='list'>
            <h2 className='list-title'>{props.title}</h2>
            <p className='number-done'>{props.numberDone} steps completed</p>
            <p className='days-straight'>{props.daysStraight} days straight</p>
            <ul>{listItems}
                <NewTask listKey={props.listKey} onItemSubmit={props.onItemSubmit}/>
            </ul>
            <p><a href='#'>see all</a></p>
        </div>
    );

}

export default List;