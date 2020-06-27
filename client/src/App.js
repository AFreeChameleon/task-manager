import React, { Component } from 'react';
import './App.css';
import Activity from './components/activity/activity';
import LoadingScreen from './components/loadingscreen/loadingscreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoadingScreen/>
        <Activity/>
      </div>
    )
  }
}

export default App;
