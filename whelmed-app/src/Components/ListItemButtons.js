import React from 'react';
import {ButtonToolbar} from 'react-bootstrap';
import CompleteButton from './Buttons/CompleteButton';
import SkipButton from './Buttons/SkipButton';
import DeleteButton from './Buttons/DeleteButton';


const ListItemButtons = (props)=>{
    return (
        <ButtonToolbar>
            <CompleteButton/>
            <SkipButton/>
            <DeleteButton/>
        </ButtonToolbar>
    );
}
export default ListItemButtons;