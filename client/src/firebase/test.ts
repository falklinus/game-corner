// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import {
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  //   orderBy,
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDcYH5Sp1dOIwJzEK0lxQY5RD5luOcqOEE',
  authDomain: 'spendings-7af4f.firebaseapp.com',
  projectId: 'spendings-7af4f',
  storageBucket: 'spendings-7af4f.appspot.com',
  messagingSenderId: '440339700347',
  appId: '1:440339700347:web:8a7c3d7f479ff5787be0de',
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

// export const addTransaction = async (transaction) => {
//   try {
//     await addDoc(collection(db, 'transactions'), {
//       ...transaction,
//     })
//   } catch (err) {
//     console.error(err)
//   }
// }

// export const getUserTransactions = async (userId) => {
//   try {
//     const q = query(
//       collection(db, 'transactions'),
//       where('userId', '==', userId),
//       orderBy('timestamp', 'desc')
//     )
//     const transactions = (await getDocs(q)).docs
//     return transactions
//   } catch (err) {
//     console.error(err)
//   }
// }
