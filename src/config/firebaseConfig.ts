import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDL40eCqOe4wpwmmrkZxhlP5R2XKd9cI7k',
  authDomain: 'nlingo-52076.firebaseapp.com',
  projectId: 'nlingo-52076',
  storageBucket: 'nlingo-52076.appspot.com',
  messagingSenderId: '43457179650',
  appId: '1:43457179650:web:19f044f69a6ed3deaaf71b',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const provider = new GoogleAuthProvider()
export const auth = getAuth()
