import logo from './logo.svg';
import React from 'react';
import AuthTest from './authTest';
import './App.css';

function App() {
  // テスト用
  return (
    <div className="App">
      <h1>Firebase Auth 動作確認</h1>
      <AuthTest />
    </div>
  );

  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
}

export default App;
