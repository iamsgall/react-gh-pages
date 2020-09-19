import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          hi{' '}
          <span role='img' aria-labelledby='hand'>
            ✌
          </span>{' '}
          salva
        </a>
      </header>
    </div>
  );
}

export default App;
