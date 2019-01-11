import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state={
      foodList:['spaghetti', 'orange', 'pineapple', 'apple', 'pear']
    }
  }

  foodArr(){
    var food = this.state.foodList.map((e,i)=>{
      return key=[i];
    })

    this.setState(this.state.foodList:food)
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.foodList}</h2>
      </div>
    );
  }
}

export default App;
