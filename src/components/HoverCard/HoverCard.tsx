import { IHoverCardProps } from './Types'
import './HoverCard.scss'
import { FC } from 'react'
import Highlight from 'react-highlight'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import IconButton from '@mui/material/IconButton/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
const HoverCard: FC<IHoverCardProps> = ({ code, language }) => {
  console.log(code)

  return (
    <Card
      sx={{
        width: 400,
        height: 300,
        m: 1,
        overflow: 'scroll',
      }}
    >
      <CardHeader sx={{ m: 0, p: 1 }} subheader={language} />
      <div style={{ borderRadius: '10px' }}>
        <Highlight className={language}>{code}</Highlight>
      </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ContentCopyIcon />
        </IconButton>
        <IconButton aria-label="delete icon">
          <DeleteIcon />
        </IconButton>

        <IconButton aria-label="open in popup icon">
          <VisibilityIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default HoverCard
