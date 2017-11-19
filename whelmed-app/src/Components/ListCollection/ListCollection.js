import React from 'react';
import List from '../List/List';
import './ListCollection.css';

const ListCollection = (props)=>{
    let lists = props.lists.map((list, index)=>{
        let {listItems, title, numberDone, daysStraight} = list;
            return (<List key={`list ${index}`} listItems={listItems} title={title} numberDone={numberDone} daysStraight={daysStraight} show={props.show} />);
    })
    return (
        <div className="list-container">
            {lists}
        </div>
    );
}

export default ListCollection;
