// src/AuthService.js
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,  // サインアウト機能
  onAuthStateChanged  //ログイン状態の監視機能
} from 'firebase/auth';
import { auth } from './firebase'; // firebase.js で export した auth をインポート



// サインアップ関数
export const signUp = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

// ログイン関数
export const login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

// サインアウト関数
export const logout = async () => {
  return await signOut(auth);
};

// 認証状態の監視関数
export const observeAuthState = (callback) => {
  return onAuthStateChanged(auth, callback);
};


// // ReactのuseStateに含まれる各変数の値を初期化・定義
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [message, setMessage] = useState('');

// // async: awaitを使用することを暗示宣言
//   // ユーザ登録情報"関数": constはあくまで再代入できない定数であり、関数の定義なども可能
// const handleSignUp = async () => {
//   try {
//     // await: 次の処理が完了するまで待機（処理が終わり次第、次の処理に進む）
//       // ユーザ登録が完了するまで待機する
//     await createUserWithEmailAndPassword(auth, email, password);
//     setMessage('ユーザー登録に成功しました');
//   } catch (error) {
//     setMessage(`登録エラー: ${error.message}`);
//   }
// };

// // ログイン機能関数
// const handleLogin = async () => {
//   try {
//     // サインインが完了するまで待機
//     await signInWithEmailAndPassword(auth, email, password);
//     setMessage('ログインに成功しました');
//   } catch (error) {
//     setMessage(`ログインエラー: ${error.message}`);
//   }
// };


export default AuthService;
