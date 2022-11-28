import styles from './contact-me-form.module.css';
import muiStyles from './styles-contact-me-form';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface ContactMeFormProps {}

export function ContactMeForm(props: ContactMeFormProps) {
  const [showSocials, setShowSocials] = useState(false);

  const toggleSocialsFormHandler = function () {
    setShowSocials(!showSocials);
  };

  return (
    <Box sx={muiStyles.form}>
      <Typography variant="h2">Contact Me:</Typography>
      <form className={styles['form']}>
        <Box sx={muiStyles.mainGrid}>
          <Box sx={muiStyles.contactGrid}>
            <Box>
              <FormControl fullWidth={true}>
                <InputLabel htmlFor="phone">Phone Number</InputLabel>
                <Input
                  id="phone"
                  type="number"
                  startAdornment={
                    <InputAdornment position="start">
                      <PhoneIcon></PhoneIcon>
                    </InputAdornment>
                  }
                ></Input>
              </FormControl>
            </Box>

            <Box>
              <FormControl fullWidth={true}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  type="email"
                  startAdornment={
                    <InputAdornment position="start">
                      <EmailIcon></EmailIcon>
                    </InputAdornment>
                  }
                ></Input>
              </FormControl>
            </Box>
          </Box>

          <Box sx={muiStyles.switchContainer}>
            <FormControlLabel
              label="Add Social Media"
              labelPlacement="start"
              control={<Switch onClick={toggleSocialsFormHandler}></Switch>}
            ></FormControlLabel>
          </Box>

          {showSocials ? (
            <Box sx={muiStyles.socialsGrid}>
              <Box>
                <FormControl fullWidth={true}>
                  <InputLabel htmlFor="facebook">Facebook</InputLabel>
                  <Input
                    id="facebook"
                    type="text"
                    name="facebook"
                    startAdornment={
                      <InputAdornment position="start">
                        <FacebookIcon></FacebookIcon>
                      </InputAdornment>
                    }
                  ></Input>
                </FormControl>
              </Box>
              <Box>
                <FormControl fullWidth={true}>
                  <InputLabel htmlFor="instagram">Instagram</InputLabel>
                  <Input
                    id="instagram"
                    type="text"
                    name="instagram"
                    startAdornment={
                      <InputAdornment position="start">
                        <InstagramIcon></InstagramIcon>
                      </InputAdornment>
                    }
                  ></Input>
                </FormControl>
              </Box>
              <Box>
                <FormControl fullWidth={true}>
                  <InputLabel htmlFor="twitter">Twitter</InputLabel>
                  <Input
                    id="twitter"
                    type="text"
                    name="twitter"
                    startAdornment={
                      <InputAdornment position="start">
                        <TwitterIcon></TwitterIcon>
                      </InputAdornment>
                    }
                  ></Input>
                </FormControl>
              </Box>
              <Box>
                <FormControl fullWidth={true}>
                  <InputLabel htmlFor="youtube">YouTube</InputLabel>
                  <Input
                    type="text"
                    id="youtube"
                    name="youtube"
                    startAdornment={
                      <InputAdornment position="start">
                        <YouTubeIcon></YouTubeIcon>
                      </InputAdornment>
                    }
                  ></Input>
                </FormControl>
              </Box>
            </Box>
          ) : (
            ''
          )}
        </Box>
        <Button sx={muiStyles.saveButton} variant="contained" type="submit">
          Save
        </Button>
      </form>
    </Box>
  );
}

export default ContactMeForm;
