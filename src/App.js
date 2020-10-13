import React from 'react';
import logo from './logo.svg';
import './App.css';
//import MainApp from "./components/MainApp";
import Dialog from "./components/Dialog";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Dialog />
    </div>
  );
}

export default App;
/*
import logo from './logo.svg';
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
</header>
*/