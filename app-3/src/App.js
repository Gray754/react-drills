import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      foodList:['burger', 'fries', 'milkshake', 'chicken nuggets', 'salad'],
      filterString:''
    }
  }

  handleChange(e){
    this.setState({filterString:e})
  }

  render() {

    let food=this.state.foodList.filter((e)=>{
      return e.includes(this.state.filterString)
    }).map((e,i)=><h2 key={i}>{e}</h2>)

    return (
      <div className="App">
        {food}
        <input onChange={(e)=>this.handleChange(e.target.value)} type='text'/>
      </div>
    )
  }
}

export default App;
