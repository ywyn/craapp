import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './pages/counter';
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <Counter></Counter>
    </div>
  );
}

export default App;
