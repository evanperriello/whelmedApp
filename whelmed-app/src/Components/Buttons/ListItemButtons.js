import React from 'react';
import CompleteButton from '../Buttons/CompleteButton';
import SkipButton from '../Buttons/SkipButton';
import DeleteButton from '../Buttons/DeleteButton';


const ListItemButtons = (props)=>{
    return (
        <div className='list-item-buttons'>
            <CompleteButton/>
            <SkipButton/>
            <DeleteButton/>
        </div>
    );
}
export default ListItemButtons;