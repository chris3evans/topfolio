import styles from './contact-me-dialog.module.css';
import muiStyles from './style-contact-me-dialog';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { emailHelp } from '../../utils/ApiService';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../utils/UserContext';
import { green } from '@mui/material/colors';
/* eslint-disable-next-line */
export interface ContactMeDialogProps {
  open: boolean;
  closeModal: any;
}

export function ContactMeDialog(props: ContactMeDialogProps) {
  const formMsg = 'If you have any request or question please fill the form';
  const { userDetails } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('none');
  const [pending, setPending] = useState(false);
  const [statusText, setStatusText] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    // event: React.FormEvent<HTMLFormElement> & { name: HTMLInputElement }
    event: any
  ) => {
    event.preventDefault();
    setPending(true);
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      title: event.target.subject.value,
      body: event.target.message.value,
      target: email,
    };
    const res = await emailHelp(data);
    res.error ? setStatus('error') : setStatus('success');
    res.error
      ? setStatusText(
          'Something went wrong , please submit again in couple minutes...'
        )
      : setStatusText('Email Sent!');

    setTimeout(() => {
      props.closeModal();
    }, 4000);
    setTimeout(() => {
      setStatus('none');
      setPending(false);
    }, 5000);
  };

  useEffect(() => {
    setEmail(userDetails.portfolio.contact_me.email);
  }, [userDetails.portfolio.contact_me.email]);
  return (
    <Dialog open={props.open} sx={muiStyles.form}>
      {status === 'none' ? (
        <>
          <DialogTitle sx={muiStyles.form}>
            <Typography
              style={{ fontSize: '3em', textAlign: 'left', fontWeight: 700 }}
            >
              Contact Me
            </Typography>
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
                onClick={props.closeModal}
                variant="contained"
                data-testid="close-button"
              >
                cancel
              </Button>
              <Box sx={{ m: 1, position: 'relative' }}>
                <Button
                  sx={muiStyles.button}
                  type="submit"
                  variant="contained"
                  data-testid="submit-button"
                  disabled={pending}
                >
                  Submit
                </Button>
                {pending && (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: green[500],
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      marginTop: '-12px',
                      marginLeft: '-12px',
                    }}
                  />
                )}
              </Box>
            </Box>
          </form>{' '}
        </>
      ) : (
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
            flexDirection: 'column',
          }}
        >
          {' '}
          <h2
            style={{
              fontSize: '5em',
              textAlign: 'center',
              fontWeight: 700,
              padding: '2em',
            }}
          >
            {statusText}
          </h2>
          <img
            src={
              status === 'success'
                ? '../../assets/Success email.gif'
                : '../../assets/error.gif'
            }
            alt="Email sent"
          ></img>{' '}
        </div>
      )}
    </Dialog>
  );
}

export default ContactMeDialog;
