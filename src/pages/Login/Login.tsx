import './Login.scss'
import { signInWithPopup } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { Redirect } from 'react-router'
import homeSvg from './../../assets/code.svg'
import { auth, db, provider } from '../../config/firebaseConfig'
import { useAuth } from '../../context/AuthContext'
import { motion } from 'framer-motion'
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
    <motion.div
      animate={{
        y: [0, 20, 0],
      }}
      transition={{
        type: 'spring',
      }}
      className="home__container"
    >
      <div className="home__right">
        <h2 className="title">
          Save All your Snippets at one place from multiple language, Keep
          things Handy
        </h2>

        <p>
          How may time did you check on google, <i>push in array in js ? </i>
          javaScript use push and Golang use append function, So store all
          repetetive code spippet here and let's save time to work on better
          things.
        </p>
        <button
          type="button"
          onClick={() => handleSignIn()}
          className="login-with-google-btn"
        >
          Sign in with Google
        </button>
      </div>
      <img className="home__left" src={homeSvg} alt="home page svg" />
    </motion.div>
  )
}

export default Login
