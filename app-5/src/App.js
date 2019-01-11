import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image memeMachine={"https://i.pinimg.com/originals/13/88/a2/1388a2ca15eea0af64c82efeb3ed3344.jpg"}/>
      </div>
    );
  }
}

export default App;
