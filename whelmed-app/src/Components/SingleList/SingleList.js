import React from 'react';
import List from '../List/List';
import ErrorPage from '../ErrorPage/ErrorPage';

const SingleList = (props)=>{
    let listKey = props.match.params.ListId;
    if (props.userData.lists[listKey]){
        let singleList = props.userLists[listKey];
        let {listItems, title, numberDone, daysStraight} = singleList;
        
        return (
            <List key={listKey} listKey={listKey} listItems={listItems} title={title} numberDone={numberDone} daysStraight={daysStraight} show={props.show} onItemSubmit={props.onItemSubmit} bottomLink={true}/>
        );
    }
    return <ErrorPage/>;
}

export default SingleList;