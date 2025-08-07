import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

// ログイン関数
export const login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

// ログアウト関数
export const logout = async () => {
  return await signOut(auth);
};
