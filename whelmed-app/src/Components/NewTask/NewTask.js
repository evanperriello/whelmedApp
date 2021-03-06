import React, { Component } from 'react';
import './NewTask.css';
import Button from '../Buttons/Button';

//This component rendered by List.js
class NewTask extends Component {
    constructor(props) {
      super(props);
      this.state = {text:''};
      this.onInputChange = this.onInputChange.bind(this);
      this.onItemSubmit = this.onItemSubmit.bind(this);
    }
    onInputChange (event){
        this.setState({text: event.target.value})
    }
    onItemSubmit(event){
        event.preventDefault();
        console.log(this.props.listKey);
        this.props.onItemSubmit(this.state.text, this.props.listKey);
        this.setState({text: ''});
    }
    render(){
        return (
            <form className='new-task-input' 
                onSubmit={this.onItemSubmit}>
                <input 
                    placeholder='Add a new item' 
                    onChange={this.onInputChange} 
                    value={this.state.text}/>
                <Button type='add'/>
            </form>
        );
    }
}

export default NewTask;