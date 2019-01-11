import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      inputBox:''
    }
  }

  handleChange(e){
    this.setState({inputBox:e})
  }

  render() {
    return (
      <div className='App'>
        <input className="inputBox" onChange={(e)=>this.handleChange(e.target.value)} type='text'/>
        <p>{this.state.inputBox}</p>
      </div>
    );
  }
}

export default App;
