import React, { Component } from 'react';
import './App.css';
import WeatherHome from './components/WeatherHome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherHome />
      </div>
    );
  }
}

export default App;
