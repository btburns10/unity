import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar"

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar/>
      </div>
    );
  }
}

export default App;
