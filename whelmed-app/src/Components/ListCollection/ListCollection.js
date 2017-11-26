import React from 'react';
import List from '../List/List';
import './ListCollection.css';

const ListCollection = (props)=>{
    let lists = [];
    let givenLists=props.lists;
    //props are an object of objects. iterate over each one and add a jsx expression to the lists array.
    for (var listKey in givenLists){
        if (givenLists.hasOwnProperty(listKey)){
            let {listItems, title, numberDone, daysStraight} = givenLists[listKey];
            lists.push(<List key={listKey} listItems={listItems} title={title} numberDone={numberDone} daysStraight={daysStraight} show={props.show} onItemSubmit={props.onItemSubmit}/>);
        }
    }
    return (
        <div className="list-container">
           {lists}
        </div>
    );
}

export default ListCollection;
