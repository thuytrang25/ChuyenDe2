import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './content.js';
import Sidebour from './sidebour.js';


class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <Content />
        <Sidebour />
       
      </div>
      );
    }
  }
  export default App;