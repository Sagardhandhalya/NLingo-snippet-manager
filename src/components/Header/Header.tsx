import './Header.scss'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import { auth } from '../../config/firebaseConfig'
import { signOut } from '@firebase/auth'
import { useAuth } from '../../context/AuthContext'
import Button from '../Button/Button'

const Header = () => {
  const { user } = useAuth()
  console.log(user?.photoURL as string)

  const logout = () => {
    signOut(auth)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <nav className="navbar__container">
      <Link to="/">
        <div className="navabar_left">
          <h2>
            <i>NLingo</i>
          </h2>
          <small>
            <i>snippetes Manager</i>
          </small>
        </div>
      </Link>

      <div className="navabar__right">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        {user ? (
          <>
            <Avatar
              imageUrl={user.photoURL as string}
              style={{ marginRight: '40px' }}
            />
            <Button text="Logout" onClick={() => logout()}></Button>
          </>
        ) : (
          <div />
        )}
      </div>
    </nav>
  )
}

export default Header
