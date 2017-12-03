import React, { Component } from 'react';
import Nav from './Containers/Nav/components/nav';
import Bio from './Containers/Bio/bio';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Nav className='nav'/>
        <Bio className='bio'/>
      </div>
    )
  }
}

export default App;
