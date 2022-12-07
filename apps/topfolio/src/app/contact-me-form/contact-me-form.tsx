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
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useContext, useState } from 'react';
import { UserContext } from '../../utils/UserContext';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { updateUser } from '../../utils/ApiService';
import { User } from '@topfolio/api-interfaces';
import FormDialog from '../form-dialog/form-dialog';
import { Alert, AlertColor, Snackbar } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

/* eslint-disable-next-line */
export interface ContactMeFormProps {
  token: string;
}
export function ContactMeForm(props: ContactMeFormProps) {
  const [showSocials, setShowSocials] = useState(false);
  const [unsaved, setUnsaved] = useState(true);
  const [dialog, setDialog] = useState({
    display: false,
    title: '',
    message: '',
  });

  const toggleSocialsFormHandler = function () {
    setShowSocials(!showSocials);
  };

  const submitHandler = function (event: any) {};

  const { userDetails, setUser } = useContext(UserContext);
  const [toast, setToast] = useState({
    open: false,
    status: 'success',
    message: '',
  });

  const mediaQuery1200 = useMediaQuery('(max-width:1200px)');
  const mediaQuery900 = useMediaQuery('(max-width:900px)');
  const mediaQuery600 = useMediaQuery('(max-width:600px)');

  console.log('USER DETAILS:', userDetails);
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
  const formSubmitHandler = async function (event: any) {
    try {
      event.preventDefault();
      setUser((current) => {
        current.portfolio.contact_me = {
          phone: event.target.phone.value,
          email: event.target.email.value,
          social_media: {
            github: showSocials ? event.target.github.value : '',
            facebook: showSocials ? event.target.facebook.value : '',
            linkedin: showSocials ? event.target.linkedin.value : '',
            instagram: showSocials ? event.target.instagram.value : '',
            twitter: showSocials ? event.target.twitter.value : '',
            youtube: showSocials ? event.target.youtube.value : '',
          },
          location: event.target.location.value,
        };
        return current;
      });
      console.log('token:', props.token);
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
      //-----------Keeping this as a reference for future use------------------
      //setDialog({ display: true, title: 'Error', message: response.message });
      //-----------------------------------------------------------------------
      console.log('API RESPONSE:', response);
    } catch (error) {
      console.error(error, 'front end error');
    }
  };
  const trackChanges = () => {
    setUnsaved(false);
  };
  const closeDialog = () => {
    setDialog({ display: false, title: '', message: '' });
  };
  /* useEffect(() => {
    setUnsaved(!unsaved);
  }, [userDetails]) */
  return (
    <>
      {/* console.log("Phone:", userDetails?.portfolio.contact_me.phone) */}
      {userDetails.portfolio.contact_me &&
      userDetails.portfolio.contact_me.email !== 'test@email.com' ? (
        <>
          {dialog.display ? (
            <FormDialog
              title={dialog.title}
              message={dialog.message}
              closeDialog={closeDialog}
            />
          ) : (
            ''
          )}
          <Box
            sx={
              mediaQuery600
                ? muiStyles['form-600']
                : mediaQuery900
                ? muiStyles['form-900']
                : mediaQuery1200
                ? muiStyles['form-1200']
                : muiStyles['form']
            }
          >
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
            <Typography variant="h2">Contact Me:</Typography>
            <form className={styles['form']} onSubmit={formSubmitHandler}>
              <Box
                sx={
                  mediaQuery1200
                    ? muiStyles['mainGrid-1200']
                    : muiStyles['mainGrid']
                }
              >
                <Box
                  sx={
                    mediaQuery600
                      ? muiStyles['contactGrid-600']
                      : muiStyles['contactGrid']
                  }
                >
                  <Box>
                    <FormControl fullWidth={true}>
                      <InputLabel htmlFor="phone">Phone Number</InputLabel>
                      <Input
                        required={true}
                        id="phone"
                        name="phone"
                        type="number"
                        onChange={trackChanges}
                        defaultValue={
                          userDetails.portfolio.contact_me
                            ? userDetails.portfolio.contact_me.phone
                            : null
                        }
                        sx={
                          mediaQuery600
                            ? muiStyles['textInput-600']
                            : mediaQuery900
                            ? muiStyles['textInput-900']
                            : mediaQuery1200
                            ? muiStyles['textInput-1200']
                            : {}
                        }
                        startAdornment={
                          <InputAdornment position="start">
                            <PhoneIcon
                              sx={
                                mediaQuery600
                                  ? muiStyles['contactIcon-600']
                                  : mediaQuery900
                                  ? muiStyles['contactIcon-900']
                                  : muiStyles['contactIcon']
                              }
                            ></PhoneIcon>
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
                        onChange={trackChanges}
                        defaultValue={
                          userDetails.portfolio.contact_me
                            ? userDetails.portfolio.contact_me.email
                            : null
                        }
                        sx={
                          mediaQuery600
                            ? muiStyles['textInput-600']
                            : mediaQuery900
                            ? muiStyles['textInput-900']
                            : mediaQuery1200
                            ? muiStyles['textInput-1200']
                            : {}
                        }
                        startAdornment={
                          <InputAdornment position="start">
                            <EmailIcon
                              sx={
                                mediaQuery600
                                  ? muiStyles['contactIcon-600']
                                  : mediaQuery900
                                  ? muiStyles['contactIcon-900']
                                  : muiStyles['contactIcon']
                              }
                            ></EmailIcon>
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
                        onChange={trackChanges}
                        defaultValue={
                          userDetails.portfolio.contact_me
                            ? userDetails.portfolio.contact_me.location
                            : null
                        }
                        sx={
                          mediaQuery600
                            ? muiStyles['textInput-600']
                            : mediaQuery900
                            ? muiStyles['textInput-900']
                            : mediaQuery1200
                            ? muiStyles['textInput-1200']
                            : {}
                        }
                        startAdornment={
                          <InputAdornment position="start">
                            <LocationOnIcon
                              sx={
                                mediaQuery600
                                  ? muiStyles['contactIcon-600']
                                  : mediaQuery900
                                  ? muiStyles['contactIcon-900']
                                  : muiStyles['contactIcon']
                              }
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
                    control={
                      <Switch onClick={toggleSocialsFormHandler}></Switch>
                    }
                  ></FormControlLabel>
                </Box>

                {showSocials ? (
                  <Box
                    sx={
                      mediaQuery600
                        ? muiStyles['socialsGrid-600']
                        : muiStyles['socialsGrid']
                    }
                  >
                    <Box>
                      <FormControl fullWidth={true}>
                        <InputLabel htmlFor="github">GitHub</InputLabel>
                        <Input
                          id="github"
                          type="text"
                          name="github"
                          onChange={trackChanges}
                          defaultValue={
                            userDetails.portfolio.contact_me
                              ? userDetails.portfolio.contact_me.social_media
                                  .github
                              : null
                          }
                          sx={
                            mediaQuery600
                              ? muiStyles['textInput-600']
                              : mediaQuery900
                              ? muiStyles['textInput-900']
                              : mediaQuery1200
                              ? muiStyles['textInput-1200']
                              : {}
                          }
                          startAdornment={
                            <InputAdornment position="start">
                              <GitHubIcon
                                sx={
                                  mediaQuery600
                                    ? muiStyles['contactIcon-600']
                                    : mediaQuery900
                                    ? muiStyles['contactIcon-900']
                                    : muiStyles['contactIcon']
                                }
                              ></GitHubIcon>
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
                          onChange={trackChanges}
                          defaultValue={
                            userDetails.portfolio.contact_me
                              ? userDetails.portfolio.contact_me.social_media
                                  .facebook
                              : null
                          }
                          sx={
                            mediaQuery600
                              ? muiStyles['textInput-600']
                              : mediaQuery900
                              ? muiStyles['textInput-900']
                              : mediaQuery1200
                              ? muiStyles['textInput-1200']
                              : {}
                          }
                          startAdornment={
                            <InputAdornment position="start">
                              <FacebookIcon
                                sx={
                                  mediaQuery600
                                    ? muiStyles['contactIcon-600']
                                    : mediaQuery900
                                    ? muiStyles['contactIcon-900']
                                    : muiStyles['contactIcon']
                                }
                              ></FacebookIcon>
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
                          onChange={trackChanges}
                          defaultValue={
                            userDetails.portfolio.contact_me
                              ? userDetails.portfolio.contact_me.social_media
                                  .linkedin
                              : null
                          }
                          sx={
                            mediaQuery600
                              ? muiStyles['textInput-600']
                              : mediaQuery900
                              ? muiStyles['textInput-900']
                              : mediaQuery1200
                              ? muiStyles['textInput-1200']
                              : {}
                          }
                          startAdornment={
                            <InputAdornment position="start">
                              <LinkedInIcon
                                sx={
                                  mediaQuery600
                                    ? muiStyles['contactIcon-600']
                                    : mediaQuery900
                                    ? muiStyles['contactIcon-900']
                                    : muiStyles['contactIcon']
                                }
                              ></LinkedInIcon>
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
                          onChange={trackChanges}
                          defaultValue={
                            userDetails.portfolio.contact_me
                              ? userDetails.portfolio.contact_me.social_media
                                  .instagram
                              : null
                          }
                          sx={
                            mediaQuery600
                              ? muiStyles['textInput-600']
                              : mediaQuery900
                              ? muiStyles['textInput-900']
                              : mediaQuery1200
                              ? muiStyles['textInput-1200']
                              : {}
                          }
                          startAdornment={
                            <InputAdornment position="start">
                              <InstagramIcon
                                sx={
                                  mediaQuery600
                                    ? muiStyles['contactIcon-600']
                                    : mediaQuery900
                                    ? muiStyles['contactIcon-900']
                                    : muiStyles['contactIcon']
                                }
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
                          onChange={trackChanges}
                          defaultValue={
                            userDetails.portfolio.contact_me
                              ? userDetails.portfolio.contact_me.social_media
                                  .twitter
                              : null
                          }
                          sx={
                            mediaQuery600
                              ? muiStyles['textInput-600']
                              : mediaQuery900
                              ? muiStyles['textInput-900']
                              : mediaQuery1200
                              ? muiStyles['textInput-1200']
                              : {}
                          }
                          startAdornment={
                            <InputAdornment position="start">
                              <TwitterIcon
                                sx={
                                  mediaQuery600
                                    ? muiStyles['contactIcon-600']
                                    : mediaQuery900
                                    ? muiStyles['contactIcon-900']
                                    : muiStyles['contactIcon']
                                }
                              ></TwitterIcon>
                            </InputAdornment>
                          }
                        ></Input>
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl fullWidth={true}>
                        <InputLabel htmlFor="youtube">YouTube</InputLabel>
                        <Input
                          role="textbox"
                          type="text"
                          id="youtube"
                          name="youtube"
                          onChange={trackChanges}
                          defaultValue={
                            userDetails.portfolio.contact_me
                              ? userDetails.portfolio.contact_me.social_media
                                  .youtube
                              : null
                          }
                          sx={
                            mediaQuery600
                              ? muiStyles['textInput-600']
                              : mediaQuery900
                              ? muiStyles['textInput-900']
                              : mediaQuery1200
                              ? muiStyles['textInput-1200']
                              : {}
                          }
                          startAdornment={
                            <InputAdornment position="start">
                              <YouTubeIcon
                                sx={
                                  mediaQuery600
                                    ? muiStyles['contactIcon-600']
                                    : mediaQuery900
                                    ? muiStyles['contactIcon-900']
                                    : muiStyles['contactIcon']
                                }
                              ></YouTubeIcon>
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
              <Button
                sx={muiStyles.saveButton}
                variant="contained"
                type="submit"
                id="contact-submit"
                disabled={unsaved}
              >
                Save
              </Button>
            </form>
          </Box>
        </>
      ) : (
        ''
      )}
    </>
  );
}
export default ContactMeForm;
