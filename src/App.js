import React, { Component } from 'react';
import './App.css';
import CatsViewerContainer from './components/CatsViewer.container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CatsViewerContainer />
      </div>
    );
  }
}

export default App;
