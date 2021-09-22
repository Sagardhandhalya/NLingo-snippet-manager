import { useEffect, useState } from 'react'

import './CreateSnippet.scss'
import { setDoc, doc } from 'firebase/firestore'
import Highlight from 'react-highlight'

import { db } from '../../config/firebaseConfig'
import { useAuth } from '../../context/AuthContext'
import { Snippet } from '../../context/Types'
import Button from '../Button/Button'
import { useDataContext } from '../../context/DataContext'
import { useLocation } from 'react-router'
import TitleBar from '../TitleBar/TitleBar'
const languages: Array<string> = ['HTML', 'cpp', 'Go', 'css', 'javascript']

const CreateSnippet = () => {
  const { user } = useAuth()
  const [title, setTitle] = useState('')
  const [desc, setDes] = useState('')
  const [language, setLanguage] = useState('C++')
  const [colletion, setColletion] = useState('')
  const [code, setCode] = useState(`print("Hello world")`)
  const [editMode, setEditMode] = useState(false)
  const { snippetGroup } = useDataContext()
  const location = useLocation()
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const collectionname = params.get('colle')
    const lang = params.get('lang')
    if (collectionname !== null && lang !== null) {
      const mySnippet = snippetGroup.filter(
        (snip) => snip.name === collectionname
      )[0]?.[lang.toString()] as Snippet

      setTitle(mySnippet.title)
      setDes(mySnippet.desc)
      setColletion(collectionname)
      setLanguage(lang)
      setCode(mySnippet.code)
      setEditMode(true)
    }
  }, [snippetGroup, location.search])

  const AddSnippet = () => {
    const value = { title, desc, language, code }
    const data: Record<string, Snippet | string> = {}
    data[language] = value
    data.name = colletion
    setDoc(doc(db, `userData/${user?.uid}/groups`, colletion), data, {
      merge: true,
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="form__container">
      <TitleBar text={editMode ? 'Edit Snippet' : 'Add New Snippet'} />

      <form className="form">
        <div className="form__control">
          <select
            name="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {languages.map((l, idx) => (
              <option key={idx} value={l}>
                {l}
              </option>
            ))}
          </select>

          <input
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="editor">
          <textarea
            rows={10}
            placeholder="Descreption"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <div className="preview">
            <Highlight className={language}>{code}</Highlight>
          </div>
        </div>
        <div className="form__control">
          <input
            id="descreption"
            placeholder="Descreption"
            value={desc}
            onChange={(e) => setDes(e.target.value)}
          />
        </div>
        <div className="form__control">
          <input
            id="groupname"
            placeholder="name of the colletion"
            value={colletion}
            onChange={(e) => setColletion(e.target.value)}
          />
        </div>
        <Button
          type="button"
          text={editMode ? 'Edit Snippet' : 'Add Snippet'}
          onClick={() => AddSnippet()}
        />
      </form>
    </div>
  )
}

export default CreateSnippet
