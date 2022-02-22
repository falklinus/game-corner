// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAFRc2bqzo37cteYZslTiiFK-Ad6AufuHs',
  authDomain: 'game-corner-ce3c4.firebaseapp.com',
  projectId: 'game-corner-ce3c4',
  storageBucket: 'game-corner-ce3c4.appspot.com',
  messagingSenderId: '465739714917',
  appId: '1:465739714917:web:5333f931d0fd61d40a118c',
}

// Initialize Firebase
const googleProvider = new GoogleAuthProvider()
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const auth = getAuth(app)
export const db = getFirestore()

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const { user } = res
    const q = query(collection(db, 'users'), where('uid', '==', user.uid))
    const docs = await getDocs(q)
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      })
    }
  } catch (err: any) {
    console.error(err)
    alert(err.message)
  }
}

export const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (err: any) {
    console.error(err)
    alert(err.message)
  }
}

export const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const { user } = res
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    })
  } catch (err: any) {
    console.error(err)
    alert(err.message)
  }
}

export const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email)
    alert('Password reset link sent!')
  } catch (err: any) {
    console.error(err)
    alert(err.message)
  }
}

export const logout = () => {
  signOut(auth)
}
