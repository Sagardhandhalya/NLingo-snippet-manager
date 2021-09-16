import { useState } from 'react'
import './CreateSnippet.scss'
import Highlight from 'react-highlight'
import Button from '../Button/Button'
const languages: Array<string> = ['HTML', 'cpp', 'Go', 'css', 'javascript']

const CreateSnippet = () => {
  const [title, setTitle] = useState('')
  const [des, setDes] = useState('')
  const [language, setLanguage] = useState('C++')
  const [code, setCode] = useState(`
function makeRequest(config: AxiosRequestConfig = defaultConfig) {
  return instance(config)
    .then((res) => res.data)
    .catch((res) => alert(JSON.stringify(res)))
}
  `)

  const AddSnippet = () => {
    const data = { title, des, language, code }
    console.log(data)
  }
  return (
    <div className="form__container">
      <h1>Create New Snippet</h1>
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
            value={des}
            onChange={(e) => setDes(e.target.value)}
          />
        </div>
        <Button type="button" text="Add Snippet" onClick={() => AddSnippet()} />
      </form>
    </div>
  )
}

export default CreateSnippet
