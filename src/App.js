import React, {useState} from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
//React map practice on line 16
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Shop></Shop>
      </header>
    </div>
  );
}

export default App;
