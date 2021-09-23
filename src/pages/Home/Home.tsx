import { useState } from 'react'

import CollectionsIcon from '@mui/icons-material/Collections'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Card, CardActions, CardHeader, IconButton, Stack } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { useDataContext } from '../../context/DataContext'

import './Home.scss'

const Home = () => {
  const { snippetGroup, sharedGroup } = useDataContext()
  const [collectionVisible, setCollectionVisible] = useState(true)
  const [sharedCollectionVisible, setSharedCCollectionVisible] = useState(true)

  return (
    <div className="container">
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton>
            <CollectionsIcon />
          </IconButton>
          <Typography variant="h6" gutterBottom component="div">
            Your Collections
          </Typography>
        </Stack>
        <IconButton onClick={() => setCollectionVisible((pre) => !pre)}>
          {collectionVisible ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowUpIcon />
          )}
        </IconButton>
      </Stack>
      <hr />
      <div className="group__container">
        {collectionVisible ? (
          snippetGroup.map((snippets, i) => {
            const path = `/collection/${i}`
            return (
              <Card
                sx={{
                  minWidth: 200,
                  minHeight: 200,
                  m: 3,
                  cursor: 'pointer',
                }}
                key={i}
              >
                <Link to={() => path}>
                  <CardHeader subheader={snippets.name} />
                  <CardMedia
                    style={{ height: 100, width: 100, margin: '0px auto' }}
                    component="img"
                    image="https://icon-library.com/images/folder-icon-png/folder-icon-png-0.jpg"
                    alt="Paella dish"
                  />
                </Link>
                <CardActions disableSpacing>
                  <IconButton
                    aria-label="share"
                    onClick={() => console.log('hi')}
                  >
                    <PersonAddIcon />
                  </IconButton>
                </CardActions>
              </Card>
            )
          })
        ) : (
          <span></span>
        )}
      </div>

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton>
            <CollectionsIcon />
          </IconButton>
          <Typography variant="h6" gutterBottom component="div">
            Shared With You.
          </Typography>
        </Stack>
        <IconButton onClick={() => setSharedCCollectionVisible((pre) => !pre)}>
          {sharedCollectionVisible ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowUpIcon />
          )}
        </IconButton>
      </Stack>
      <hr />

      <div className="group__container">
        {collectionVisible ? (
          sharedGroup.map((snippets, i) => {
            const path = `/collection/${i}`
            return (
              <Card
                sx={{
                  minWidth: 250,
                  minHeight: 250,
                  m: 3,
                  cursor: 'pointer',
                }}
                key={i}
              >
                <Link to={() => path}>
                  <CardHeader subheader={snippets.name} />
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://source.unsplash.com/250x250/?code,programming,nature"
                    alt="Paella dish"
                  />
                </Link>
                <CardActions disableSpacing>
                  <IconButton
                    aria-label="share"
                    onClick={() => console.log('hi')}
                  >
                    <PersonAddIcon />
                  </IconButton>
                </CardActions>
              </Card>
            )
          })
        ) : (
          <span></span>
        )}
      </div>
    </div>
  )
}

export default Home
