import './HoverCard.scss'
import { FC, useState } from 'react'

import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardHeader from '@mui/material/CardHeader'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton/IconButton'
import { doc, updateDoc, deleteField } from 'firebase/firestore'
import Highlight from 'react-highlight'
import { db } from '../../config/firebaseConfig'
import { useAuth } from '../../context/AuthContext'
import Modal from './../Modal/Modal'
import { IHoverCardProps } from './Types'
import { useHistory } from 'react-router'

const HoverCard: FC<IHoverCardProps> = ({ code, language, docpath }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const history = useHistory()
  const { user } = useAuth()
  const copyCode = () => {
    navigator.clipboard
      .writeText(code)
      .then((w) => console.log(w))
      .catch((err) => console.log(err))
  }

  const dropSnippet = () => {
    const docref = doc(db, `userData/${user?.uid}/groups`, docpath)
    console.log(docref.path)

    const data: any = {}
    data[language] = deleteField()
    updateDoc(docref, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
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
        <IconButton
          aria-label="add to favorites"
          onClick={() =>
            history.push(`/create?colle=${docpath}&lang=${language}`)
          }
        >
          <EditIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={copyCode}>
          <ContentCopyIcon />
        </IconButton>
        <IconButton aria-label="delete icon" onClick={dropSnippet}>
          <DeleteIcon />
        </IconButton>

        <IconButton
          aria-label="open in popup icon"
          onClick={() => setIsModalOpen(true)}
        >
          <VisibilityIcon />
        </IconButton>
      </CardActions>
      <Modal open={isModalOpen} handleClose={() => setIsModalOpen(false)}>
        <DialogContent>
          <Highlight className={language}>{code}</Highlight>
        </DialogContent>
      </Modal>
    </Card>
  )
}

export default HoverCard
