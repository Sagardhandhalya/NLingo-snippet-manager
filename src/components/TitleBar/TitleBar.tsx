import { FC } from 'react'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { IconButton, Stack, Typography } from '@mui/material'
import { useHistory } from 'react-router'
import './TitleBar.scss'

const TitleBar: FC<{ text: string }> = ({ text }) => {
  const history = useHistory()
  return (
    <Stack
      className="titlebar__container"
      direction="row"
      spacing={2}
      alignItems="center"
    >
      <IconButton onClick={() => history.goBack()}>
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h6" gutterBottom component="div">
        {text}
      </Typography>
    </Stack>
  )
}

export default TitleBar
