import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../firebase';
export async function createUser(params) {
  const auth = getAuth(app);

  return await createUserWithEmailAndPassword(auth, params.email, params.password)
}

export async function login({email, password}){
  const auth = getAuth(app);
  console.log('login', email, password);

  return await signInWithEmailAndPassword(auth, email, password);
}
