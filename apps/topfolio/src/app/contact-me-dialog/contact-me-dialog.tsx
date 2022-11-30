import styles from './contact-me-dialog.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MovingTitleComponent from '../moving-title-component/moving-title-component';
import { useState } from 'react';
/* eslint-disable-next-line */
export interface ContactMeDialogProps {
  open: boolean;
  onClose: any;
}

export function ContactMeDialog(props: ContactMeDialogProps) {
  const formMsg = 'If you have any request or question please fill the form';
  const [form, setForm] = useState({});
  const handleChange = (e: any) => {};
  const handleSubmit = (form: object) => {};

  return (
    <Dialog open={props.open}>
      <DialogTitle>
        <MovingTitleComponent text={'Contact me'} alignCenter={false} />
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ fontSize: 20, fontWeight: 600 }}>
          {formMsg}
        </DialogContentText>
        <div style={{ display: 'flex', gap: '2em', fontSize: '1em' }}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            variant="outlined"
          />
        </div>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Subject"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Message"
          type="text"
          fullWidth
          variant="outlined"
          multiline
          rows={4}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={props.onClose}
          variant="contained"
          color="warning"
          sx={{ fontSize: 10, fontWeight: 600 }}
        >
          Cancel
        </Button>
        <Button
          onClick={props.onClose}
          variant="contained"
          sx={{ fontSize: 10, fontWeight: 600 }}
        >
          Send message!
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ContactMeDialog;
