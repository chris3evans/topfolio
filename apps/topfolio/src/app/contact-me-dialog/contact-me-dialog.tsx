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
import { emailHelp } from '../../utils/ApiService';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../utils/UserContext';
/* eslint-disable-next-line */
export interface ContactMeDialogProps {
  open: boolean;
  onClose: any;
}

export function ContactMeDialog(props: ContactMeDialogProps) {
  const formMsg = 'If you have any request or question please fill the form';
  const { userDetails } = useContext(UserContext);
  const [email, setEmail] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = {
      name: event.target.name?.value,
      email: event.target.email?.value,
      title: event.target.subject?.value,
      body: event.target.message?.value,
      target: email,
    };
    emailHelp(data);
  };

  useEffect(() => {
    setEmail(userDetails.portfolio.contact_me.email);
  }, [userDetails.portfolio.contact_me.email]);

  return (
    <Dialog open={props.open} sx={muiStyles.form}>
      <DialogTitle sx={muiStyles.form}>
        <MovingTitleComponent
          text={'Contact me'}
          alignCenter={false}
          html={'h2'}
        />
      </DialogTitle>
      <form onSubmit={handleSubmit} className={styles['form-we']}>
        <Typography sx={muiStyles.formTitle}>{formMsg}</Typography>
        <Box sx={muiStyles.formFields}>
          <Box sx={muiStyles.inputField}>
            <FormControl sx={{ fontSize: 18 }} fullWidth={true}>
              <InputLabel sx={{ fontSize: 18 }} htmlFor="name">
                Name
              </InputLabel>
              <Input type="text" id="name" name="name"></Input>
            </FormControl>
          </Box>
          <Box sx={muiStyles.inputField}>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="email" sx={{ fontSize: 18 }}>
                Email
              </InputLabel>
              <Input
                sx={{ fontSize: 18 }}
                type="text"
                id="email"
                name="email"
              ></Input>
            </FormControl>
          </Box>
          <Box sx={muiStyles.inputField}>
            <FormControl fullWidth={true}>
              <InputLabel sx={{ fontSize: 18 }} htmlFor="subject">
                Subject
              </InputLabel>
              <Input
                sx={{ fontSize: 18 }}
                type="text"
                id="subject"
                name="subject"
              ></Input>
            </FormControl>
          </Box>
          <Box sx={muiStyles.inputField}>
            <FormControl fullWidth={true}>
              <InputLabel sx={{ fontSize: 18 }} htmlFor="message">
                Message...
              </InputLabel>
              <Input
                sx={{ fontSize: 18 }}
                type="text"
                id="message"
                name="message"
              ></Input>
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
            Submit
          </Button>
        </Box>
      </form>
    </Dialog>
  );
}

export default ContactMeDialog;
