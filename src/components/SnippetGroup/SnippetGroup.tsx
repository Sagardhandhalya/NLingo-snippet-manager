import { useParams } from 'react-router'
import { useDataContext } from '../../context/DataContext'
import HoverCard from '../HoverCard/HoverCard'
import './SnippetGroup.scss'
const SnippetGroup = () => {
  const { id } = useParams<{ id: string }>()
  const { snippetGroup } = useDataContext()
  const snippets = Object.values(snippetGroup[parseInt(id)])

  return (
    <div className="container">
      <h3>{snippetGroup[parseInt(id)].name}</h3>
      <hr />
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
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default SnippetGroup
