import { NextOrObserver, User } from '@firebase/auth'
import { createContext, useContext, useState } from 'react'
import { auth } from '../config/firebaseConfig'
import { IAuthContextValue, IContextProps } from './Types'

const authContext = createContext<IAuthContextValue>({
  user: null,
})
const AuthProvider = ({ children }: IContextProps) => {
  const [user, setUser] = useState(null)

  auth.onAuthStateChanged(setUser as NextOrObserver<User | null>)

  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  )
}

const useAuth = () => useContext(authContext)

export { useAuth, AuthProvider }
