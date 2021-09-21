import { User } from '@firebase/auth'
import { Dispatch, ReactChild, ReactChildren } from 'react'

export interface Snippet {
  title: string
  desc: string
  code: string
  language: string
}

export interface IContextValue {
  snippetGroup: Array<Record<string, Snippet | string>>
  updateSnippetGroup?: Dispatch<
    React.SetStateAction<Record<string, string | Snippet>[]>
  >
}

export interface IAuthContextValue {
  user: User | null
}

export interface IContextProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[]
}
