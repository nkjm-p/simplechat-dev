import logo from './logo.svg';
import React from 'react';
import AuthService from './AuthService';
import './App.css';

function App() {
  // テスト用
  return (
    <div>

      <h2>Authテスト画面</h2>
      <input
        type="email"
        placeholder="メールアドレス"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <input
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button onClick={handleSignUp}>サインアップ</button>
      <button onClick={handleLogin}>ログイン</button>
      <p>{message}</p>
      
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
