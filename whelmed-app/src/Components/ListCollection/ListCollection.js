import React from 'react';
import List from '../List/List';
import './ListCollection.css';

const ListCollection = (props)=>{
    return (
        <div className="list-container">
            <List lists={props.lists} title='Things To Do 1' numberDone='100' daysStraight='5' show='3'/>
        </div>
    );
}

export default ListCollection;
