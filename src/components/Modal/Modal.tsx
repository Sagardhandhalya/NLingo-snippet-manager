import { Button, DialogActions } from '@mui/material'
import Dialog from '@mui/material/Dialog'

const Modal = ({ children, open, handleClose }: any) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      {children}
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal
