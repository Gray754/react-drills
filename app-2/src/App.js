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

  render() {
    var food = this.state.foodList.map((e,i)=>{
      return(
        <h2 key={i}>{e}</h2>
      )
    })

    return (
      <div className="App">
        {food}
      </div>
    );
  }
}

export default App;
