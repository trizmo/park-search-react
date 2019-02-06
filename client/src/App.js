import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from './components/NavBar';
import ParkSearchContainer from './components/ParkSearchContainer';
import Favorites from './components/Favorites';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ParkSearchContainer />
        <Favorites />
      </div>
    );
  }
}

export default App;
