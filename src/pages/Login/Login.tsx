import './Login.scss'
import { signInWithPopup } from 'firebase/auth'
import { auth, db, provider } from '../../config/firebaseConfig'
import { useAuth } from '../../context/AuthContext'
import { Redirect } from 'react-router'
import { doc, setDoc } from 'firebase/firestore'

const Login = () => {
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user)
        const { displayName, photoURL, uid, email } = result.user
        setDoc(
          doc(db, 'userData', uid),
          { displayName, photoURL, uid, email },
          { merge: true }
        )
          .then((res) => {
            console.log(res)
          })
          .catch((err) => console.log(err))
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }
  const { user } = useAuth()
  return user ? (
    <Redirect to="/" />
  ) : (
    <div className="home__container">
      <div>
        <h1 className="title">Save All your Snippets at one place.</h1>

        <button
          type="button"
          onClick={() => handleSignIn()}
          className="login-with-google-btn"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  )
}

export default Login
