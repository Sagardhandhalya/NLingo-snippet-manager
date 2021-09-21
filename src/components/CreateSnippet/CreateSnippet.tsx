import { useState } from 'react'
import './CreateSnippet.scss'
import Highlight from 'react-highlight'
import Button from '../Button/Button'
import { setDoc, doc } from 'firebase/firestore'
import { useAuth } from '../../context/AuthContext'
import { db } from '../../config/firebaseConfig'
import { Snippet } from '../../context/Types'
const languages: Array<string> = ['HTML', 'cpp', 'Go', 'css', 'javascript']

const CreateSnippet = () => {
  const { user } = useAuth()
  const [title, setTitle] = useState('')
  const [desc, setDes] = useState('')
  const [language, setLanguage] = useState('C++')
  const [colletion, setColletion] = useState('')
  const [code, setCode] = useState(`
function makeRequest(config: AxiosRequestConfig = defaultConfig) {
  return instance(config)
    .then((res) => res.data)
    .catch((res) => alert(JSON.stringify(res)))
}
  `)

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
      <form className="form">
        <div className="form__control">
          <select name="language" onChange={(e) => setLanguage(e.target.value)}>
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
        <Button type="button" text="Add Snippet" onClick={() => AddSnippet()} />
      </form>
    </div>
  )
}

export default CreateSnippet
