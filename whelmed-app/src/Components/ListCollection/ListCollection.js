import React from 'react';
import List from '../List/List';
import './ListCollection.css';

const ListCollection = (props)=>{
    let lists = props.lists.map((list)=>{
        let {listItems, title, numberDone, daysStraight} = list;
        console.log(listItems);
            return (<List key={list.ListId} listItems={listItems} title={title} numberDone={numberDone} daysStraight={daysStraight} show={props.show} />);
    })
    return (
        <div className="list-container">
            {lists}
        </div>
    );
}

export default ListCollection;
