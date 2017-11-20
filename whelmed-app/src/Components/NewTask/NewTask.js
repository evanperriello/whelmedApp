import React, { Component } from 'react';
import './NewTask.css';
import AddButton from '../Buttons/AddButton';

class NewTask extends Component {
    constructor(props) {
      super(props);
      this.state = {text:''};
      this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange (event){
        this.setState({text: event.target.value})
    }
    render(){
        return (
            <div className='new-task-input'>
                <input 
                    placeholder='Add a new item' 
                    onChange={this.onInputChange} 
                    value={this.state.text}/>
                <AddButton/>
            </div>
        );
    }
}

export default NewTask;