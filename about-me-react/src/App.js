import React, { Component } from 'react';
import Nav from './Containers/Nav/nav';
import Bio from './Containers/Bio/bio';
import Tech from './Containers/Tech/tech';
import Learning from './Containers/Learning/learning';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='nav'>
          <Nav/>
        </div>
        <Bio/>
        <Tech/>
        <Learning/>
      </div>
    )
  }
}

export default App;
