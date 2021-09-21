import { Card } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useDataContext } from '../../context/DataContext'
import './Home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  const { snippetGroup } = useDataContext()

  return (
    <div className="container">
      <h3>Your collections</h3>
      <hr />
      <div className="group__container">
        {snippetGroup.map((snippets, i) => {
          const path = `/collection/${i}`
          return (
            <Link key={i} to={() => path}>
              <Card
                sx={{ minWidth: 250, minHeight: 250, m: 3, cursor: 'pointer' }}
              >
                <CardMedia
                  component="img"
                  height="194"
                  image="https://source.unsplash.com/user/erondu/250x250"
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography gutterBottom>{snippets.name}</Typography>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Home
