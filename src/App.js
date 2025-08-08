import logo from './logo.svg';
import React from 'react';
import AuthService from './AuthService';
import './App.css';

function App() {
  /* 認証用変数の定義 */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);

  /* ここから認証機能の呼び出し */
  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      setMessage('ユーザー登録に成功しました');
    } catch (error) {
      setMessage(`登録エラー: ${error.message}`);
    }
  };

  const handleLogin = async () => {
    try {
      await login(email, password);
      setMessage('ログインに成功しました');
    } catch (error) {
      setMessage(`ログインエラー: ${error.message}`);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setMessage('ログアウトしました');
    } catch (error) {
      setMessage(`ログアウトエラー: ${error.message}`);
    }
  };

  useEffect(() => {
    const unsubscribe = observeAuthState((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);
  /* 認証機能ここまで */

  /* ここから表示画面 */
  return (
    <div>

      <h2>認証画面</h2>

      
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
      <button onClick={handleLogout}>ログアウト</button>
      <p>{message}</p>
      <p>現在のユーザ: {user ? user.email : '未ログイン'}</p>

    </div>
  );

}

export default App;
