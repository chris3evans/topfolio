import styles from './info-about-me.module.css';
import muiStyles from './styles-info-about-me';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import { updateUser, getUser } from '../../utils/ApiService';
import { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import UploadImageWidget from '../upload-image-widget/upload-image-widget';
import { useState, useEffect } from 'react';
import { Alert, AlertColor, Grid, Snackbar } from '@mui/material';

/* eslint-disable-next-line */
export interface InfoAboutMeProps {
  token: string;
}

export function InfoAboutMe(props: InfoAboutMeProps) {
  const { userDetails, setUser } = useContext(UserContext);
  const [profileImage, setProfileImage] = useState(
    userDetails.portfolio.profile_image
      ? userDetails.portfolio.profile_image
      : '../../assets/profilepic.png'
  );
  const [heroImage, setHeroImage] = useState(
    userDetails.portfolio.hero_image
      ? userDetails.portfolio.hero_image
      : '../../assets/hero.jpg'
  );
  const [toast, setToast] = useState({
    open: false,
    status: 'success',
    message: '',
  });
  const [unsaved, setUnsaved] = useState(true);

  const trackChanges = () => {
    setUnsaved(false);
  };

  const showToast = (status: string, msg: string) => {
    setToast({ open: true, status, message: msg });
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setToast({ open: false, status: 'success', message: '' });
  };

  const getUploadedProfileImage = (profileImage: any) => {
    setProfileImage(profileImage.url);
  };
  const getUploadedHeroImage = (profileImage: any) => {
    setHeroImage(profileImage.url);
  };

  // const getUploadedImage = (img: any) => {
  //   setImage(img.url);
  // };

  const formSumbitHandler = async function (event: any) {
    try {
      event.preventDefault();
      setUser((current: any) => {
        // @ts-ignore
        current.portfolio.bio = event.target.bio.value;
        current.portfolio.bio_title = event.target.bio_title.value;
        current.portfolio.hero_image = heroImage;
        current.portfolio.hero_title = event.target.hero_title.value;
        current.portfolio.profile_image = profileImage;
        return current;
      });
      console.log(userDetails, 'data to send backend');
      console.log(props.token, 'token');

      const response = await updateUser(userDetails, props.token);

      if (response.error === '') {
        showToast(
          'success',
          'Settings were successfully changed. Now you can preview you portfolio'
        );
        setUnsaved(true);
      } else {
        showToast('error', response.error);
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={muiStyles.form}>
      <Snackbar
        open={toast.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity={toast.status as AlertColor}
          sx={{ width: '100%', 'font-size': '20px' }}
        >
          {toast.message}
        </Alert>
      </Snackbar>

      <Typography align="center" sx={muiStyles.formTitle} variant="h2">
        About me
      </Typography>
      <form onSubmit={formSumbitHandler} className={styles['form-we']}>
        <Box sx={muiStyles.formFields}>
          <Box sx={muiStyles.bodyField}>
            <FormControl>
              <div className={styles['customLabel']}>Hero image</div>
              <div>
                <img className={styles['himg']} src={heroImage}></img>
              </div>
              <UploadImageWidget
                callback={getUploadedHeroImage}
                buttonText={'Upload Hero Image'}
              />
            </FormControl>
          </Box>

          <Box sx={muiStyles.bodyField}>
            <FormControl>
              <InputLabel htmlFor="hero_title">
                Full Name: (userDetails.name)
              </InputLabel>
              <Input
                type="text"
                id="name"
                name="name"
                onChange={trackChanges}
                defaultValue={userDetails.name ? userDetails.name : null}
                multiline={false}
              ></Input>
            </FormControl>
          </Box>

          <Box sx={muiStyles.bodyField}>
            <div className={styles['customLabel']}>Profile picture</div>
            <div>
              <img className={styles['pimg']} src={profileImage}></img>
            </div>
            <UploadImageWidget
              callback={getUploadedProfileImage}
              buttonText={'Upload Profile Picture'}
            />
          </Box>

          <Box sx={muiStyles.bodyField}>
            <FormControl>
              <InputLabel htmlFor="hero_title">
                Hero banner description: (portfolio.hero_title)
              </InputLabel>
              <Input
                type="text"
                id="hero_title"
                name="hero_title"
                onChange={trackChanges}
                defaultValue={
                  userDetails.portfolio.hero_title
                    ? userDetails.portfolio.hero_title
                    : null
                }
                multiline={true}
              ></Input>
            </FormControl>
          </Box>

          <Box sx={muiStyles.titleField}>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="bio_title">
                Biografy title: (portfolio.bio_title)
              </InputLabel>
              <Input
                type="text"
                id="bio_title"
                name="bio_title"
                onChange={trackChanges}
                defaultValue={
                  userDetails.portfolio.bio_title
                    ? userDetails.portfolio.bio_title
                    : null
                }
              ></Input>
            </FormControl>
          </Box>

          <Box sx={muiStyles.bodyField}>
            <FormControl>
              <InputLabel htmlFor="bio">
                Biografy description: (portfolio.bio)
              </InputLabel>
              <Input
                type="text"
                id="bio"
                name="bio"
                onChange={trackChanges}
                defaultValue={
                  userDetails.portfolio.bio ? userDetails.portfolio.bio : null
                }
                multiline={true}
              ></Input>
            </FormControl>
          </Box>

          {/* <Box sx={muiStyles.imageUploadContainer}>
            <UploadImageWidget callback={getUploadedHeroImage} />
          </Box> */}
        </Box>
        <Button
          sx={muiStyles.saveButton}
          type="submit"
          variant="contained"
          disabled={unsaved}
        >
          Save
        </Button>
      </form>
    </Box>
  );
}

export default InfoAboutMe;
