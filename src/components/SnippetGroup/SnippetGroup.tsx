import { useParams } from 'react-router'

import { useDataContext } from '../../context/DataContext'
import HoverCard from '../HoverCard/HoverCard'
import TitleBar from './../TitleBar/TitleBar'
import './SnippetGroup.scss'

const SnippetGroup = () => {
  const { id } = useParams<{ id: string }>()
  const { snippetGroup } = useDataContext()
  const snippets = Object.values(snippetGroup[parseInt(id)])

  return (
    <div className="container">
      <TitleBar text={snippetGroup[parseInt(id)].name as string} />

      <div className="group__container">
        {snippets.map((snippet, i) => {
          if (typeof snippet !== 'string') {
            return (
              <HoverCard
                key={i}
                title={snippet.title}
                desc={snippet?.desc}
                language={snippet.language}
                code={snippet.code}
                docpath={snippetGroup[parseInt(id)].name as string}
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default SnippetGroup
