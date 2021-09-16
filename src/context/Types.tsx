import { User } from '@firebase/auth'
import { Dispatch, ReactChild, ReactChildren } from 'react'

export interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
}
export interface IContextValue {
  todos: Array<ITodo>
  updateTodo?: Dispatch<React.SetStateAction<ITodo[]>>
}

export interface IAuthContextValue {
  user: User | null
}

export interface IContextProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[]
}
