import { createContext, useContext, useEffect, useState } from 'react'

import { collection, onSnapshot } from 'firebase/firestore'

import { db } from '../config/firebaseConfig'
import { useAuth } from './../context/AuthContext'
import { IContextProps, IContextValue, Snippet } from './Types'
const initialState = {
  snippetGroup: [],
}
const dataContext = createContext<IContextValue>(initialState)
const DataContext = ({ children }: IContextProps) => {
  const [snippetGroup, setSnippetGroup] = useState<
    Array<Record<string, Snippet | string>>
  >(initialState.snippetGroup)
  const { user } = useAuth()
  console.log(`userData/${user?.uid}/groups`)

  useEffect(() => {
    if (user?.uid) {
      const unsub = onSnapshot(
        collection(db, `userData/${user?.uid}/groups`),
        (snapshot) => {
          setSnippetGroup(snapshot.docs.map((e) => e.data()))
          console.log(snapshot.docs.map((e) => e.data()))
        }
      )
      return unsub
    }
  }, [user?.uid])
  return (
    <dataContext.Provider
      value={{ snippetGroup, updateSnippetGroup: setSnippetGroup }}
    >
      {children}
    </dataContext.Provider>
  )
}

export const useDataContext = () => useContext(dataContext)

export default DataContext
