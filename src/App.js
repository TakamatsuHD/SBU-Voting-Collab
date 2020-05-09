import React from 'react';
import logo from './logo.svg';
import {Button} from 'react-materialize';
import './App.css';
import DisplaySwitcher from './DisplaySwitcher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Header for the website */}
        <div id = "headerBanner">
          <h>Stony Brook University Center for Civic Justice</h>
          <p>SBU Voting</p>
        </div>
        {/* Primary changing display, changes based on button presses in the MenuScreen */}
           <DisplaySwitcher/>
      </header>
    </div>
  );
}

export default App;
