import styles from './contact-me-dialog.module.css';
import muiStyles from './style-contact-me-dialog';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import MovingTitleComponent from '../moving-title-component/moving-title-component';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/* eslint-disable-next-line */
export interface ContactMeDialogProps {
  open: boolean;
  onClose: any;
}

export function ContactMeDialog(props: ContactMeDialogProps) {
  const formMsg = 'If you have any request or question please fill the form';

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = {
      name: event.target.name?.value,
      email: event.target.email?.value,
      subject: event.target.subject?.value,
      message: event.target.message?.value,
    };
    //send form data here
    console.log(formData);
  };

  return (
    <Dialog open={props.open} sx={muiStyles.form}>
      <DialogTitle sx={muiStyles.form}>
        <MovingTitleComponent text={'Contact me'} alignCenter={false} />
      </DialogTitle>
      <form onSubmit={handleSubmit} className={styles['form-we']}>
        <Typography sx={muiStyles.formTitle}>{formMsg}</Typography>
        <Box sx={muiStyles.formFields}>
          <Box sx={muiStyles.inputField}>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="name">Name:</InputLabel>
              <Input type="text" id="name" name="name"></Input>
            </FormControl>
          </Box>
          <Box sx={muiStyles.inputField}>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="email">Email:</InputLabel>
              <Input type="text" id="email" name="email"></Input>
            </FormControl>
          </Box>
          <Box sx={muiStyles.inputField}>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="subject">Subject:</InputLabel>
              <Input type="text" id="subject" name="subject"></Input>
            </FormControl>
          </Box>
          <Box sx={muiStyles.inputField}>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="message">Message:</InputLabel>
              <Input type="text" id="message" name="message"></Input>
            </FormControl>
          </Box>
        </Box>
        <Box sx={muiStyles.buttons}>
          <Button
            sx={muiStyles.button}
            onClick={props.onClose}
            variant="contained"
            data-testid="close-button"
          >
            cancel
          </Button>
          <Button
            sx={muiStyles.button}
            onClick={props.onClose}
            type="submit"
            variant="contained"
            data-testid="submit-button"
          >
            Save
          </Button>
        </Box>
      </form>
    </Dialog>
  );
}

export default ContactMeDialog;
