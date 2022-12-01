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
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../utils/UserContext';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { updateUser } from '../../utils/ApiService';
import { User } from '@topfolio/api-interfaces';

/* eslint-disable-next-line */
export interface ContactMeFormProps {
  token: string;
}

export function ContactMeForm(props: ContactMeFormProps) {
  const [showSocials, setShowSocials] = useState(false);

  const toggleSocialsFormHandler = function () {
    setShowSocials(!showSocials);
  };

  const submitHandler = function (event: any) {};

  const { userDetails, setUser } = useContext(UserContext);

  console.log('USER DETAILS:', userDetails);

  const formSubmitHandler = async function (event: any) {
    try {
      event.preventDefault();

      setUser((current) => {
        // @ts-ignore
        current.portfolio.contact_me = {
          phone: event.target.phone.value,
          email: event.target.email.value,
          social_media: {
            github: event.target.github.value,
            facebook: event.target.facebook.value,
            linkedin: event.target.linkedin.value,
            instagram: event.target.instagram.value,
            twitter: event.target.twitter.value,
            youtube: event.target.youtube.value,
          },
          location: event.target.location.value,
        };
        return current;
      });
      // @ts-ignore
      //console.log(userDetails, 'data to send backend', props.token);
      //@ts-ignore
      const response = await updateUser(userDetails, props.token);
      console.log(response);
    } catch (error) {
      console.error(error, 'front end error');
    }
  };
  /* userDetails.portfolio.contact_me.phone */
  return (
    <Box sx={muiStyles.form}>
      <Typography variant="h2">Contact Me:</Typography>
      <form className={styles['form']} onSubmit={formSubmitHandler}>
        <Box sx={muiStyles.mainGrid}>
          <Box sx={muiStyles.socialsGrid}>
            <Box>
              <FormControl fullWidth={true}>
                <InputLabel htmlFor="phone">Phone Number</InputLabel>
                <Input
                  required={true}
                  id="phone"
                  name="phone"
                  type="number"
                  defaultValue=""
                  startAdornment={
                    <InputAdornment position="start">
                      <PhoneIcon sx={muiStyles.contactIcon}></PhoneIcon>
                    </InputAdornment>
                  }
                ></Input>
              </FormControl>
            </Box>

            <Box>
              <FormControl fullWidth={true}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  required={true}
                  id="email"
                  name="email"
                  type="email"
                  startAdornment={
                    <InputAdornment position="start">
                      <EmailIcon sx={muiStyles.contactIcon}></EmailIcon>
                    </InputAdornment>
                  }
                ></Input>
              </FormControl>
            </Box>

            <Box>
              <FormControl fullWidth={true}>
                <InputLabel htmlFor="location">Location</InputLabel>
                <Input
                  required={true}
                  id="location"
                  name="location"
                  type="location"
                  startAdornment={
                    <InputAdornment position="start">
                      <LocationOnIcon
                        sx={muiStyles.contactIcon}
                      ></LocationOnIcon>
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
                  <InputLabel htmlFor="github">GitHub</InputLabel>
                  <Input
                    id="github"
                    type="text"
                    name="github"
                    startAdornment={
                      <InputAdornment position="start">
                        <FacebookIcon sx={muiStyles.contactIcon}></FacebookIcon>
                      </InputAdornment>
                    }
                  ></Input>
                </FormControl>
              </Box>
              <Box>
                <FormControl fullWidth={true}>
                  <InputLabel htmlFor="facebook">Facebook</InputLabel>
                  <Input
                    id="facebook"
                    type="text"
                    name="facebook"
                    startAdornment={
                      <InputAdornment position="start">
                        <FacebookIcon sx={muiStyles.contactIcon}></FacebookIcon>
                      </InputAdornment>
                    }
                  ></Input>
                </FormControl>
              </Box>
              <Box>
                <FormControl fullWidth={true}>
                  <InputLabel htmlFor="facebook">Linkedin</InputLabel>
                  <Input
                    id="linkedin"
                    type="text"
                    name="linkedin"
                    startAdornment={
                      <InputAdornment position="start">
                        <FacebookIcon sx={muiStyles.contactIcon}></FacebookIcon>
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
                        <InstagramIcon
                          sx={muiStyles.contactIcon}
                        ></InstagramIcon>
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
                        <TwitterIcon sx={muiStyles.contactIcon}></TwitterIcon>
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
                        <YouTubeIcon sx={muiStyles.contactIcon}></YouTubeIcon>
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
