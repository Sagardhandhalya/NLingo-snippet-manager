import { createContext, useContext, useEffect, useState } from 'react'
import { makeRequest } from '../services/Fetch.service'
import { IContextProps, IContextValue, ITodo } from './Types'
const initialState = {
  todos: [
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
  ],
}
const dataContext = createContext<IContextValue>(initialState)
const DataContext = ({ children }: IContextProps) => {
  const [todos, setTodos] = useState<Array<ITodo>>(initialState.todos)

  useEffect(() => {
    makeRequest({
      method: 'GET',
      url: '/todos?_start=10&_limit=5',
    }).then((res) => {
      setTodos(res)
    })
  }, [])
  return (
    <dataContext.Provider value={{ todos: todos, updateTodo: setTodos }}>
      {children}
    </dataContext.Provider>
  )
}

export const useDataContext = () => useContext(dataContext)

export default DataContext
