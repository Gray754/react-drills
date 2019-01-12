import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(){
    super();
    this.state={
      todoList:[],
      inputStr:''
    }
  }

  handleChange=(e)=>{
    this.setState({inputStr:e})
  }

  handleClick=()=>{
    var listOfStuff = this.state.todoList.map((e)=>e)
    listOfStuff.push(this.state.inputStr);

    this.setState({todoList:listOfStuff});
  }


  render() {
    let sortList=this.state.todoList.map((e,i)=>{
        return (
          <Todo key={i} todo={e}/>
          // <h3 key={i}>{e}</h3>
        )
    })

    return (
      <div className="App">
        <h2>My to-do list:</h2>
        <input onChange={(e)=>this.handleChange(e.target.value)} placeholder="Enter new task" />
        <button onClick={this.handleClick}>Click Me</button>
        {sortList}
      </div>
    );
  }
}

export default App;
