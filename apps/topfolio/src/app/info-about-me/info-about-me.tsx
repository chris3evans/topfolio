import styles from './info-about-me.module.css';
import muiStyles from './styles-info-about-me';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import { updateUser } from '../../utils/ApiService';
import { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';

/* eslint-disable-next-line */
export interface InfoAboutMeProps {
    token: string;
}

export function InfoAboutMe(props: InfoAboutMeProps) {

  const { userDetails, setUser } = useContext(UserContext);


  const formSumbitHandler = async function (event: any) {
    try {
      event.preventDefault();

      const formData = {
        bio: event.target.bio.value,
        bio_title: event.target.bio_title.value,
        hero_image: event.target.hero_image.value,
        hero_title: event.target.hero_title.value,
        profile_image: event.target.profile_image.value,
      };

     setUser((current: any) => {
        // @ts-ignore
       current.portfolio.bio = formData.bio
       current.portfolio.bio_title = formData.bio_title
       current.portfolio.hero_image = formData.hero_image
       current.portfolio.hero_title = formData.hero_title
        current.portfolio.profile_image = formData.profile_image;
        return current;
      });
      console.log(userDetails, 'data to send backend');
      console.log(props.token, 'token');
      // @ts-ignore
      const response = await updateUser(userDetails, props.token);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

   return (
    <Box sx={muiStyles.form}>
      <Typography align="center" sx={muiStyles.formTitle} variant="h2">
        Custom text
      </Typography>
      <form onSubmit={formSumbitHandler} className={styles['form-we']}>
        <Box sx={muiStyles.formFields}>
          <Box sx={muiStyles.titleField}>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="bio_title">Bio title:</InputLabel>
              <Input
                type="text"
                id="bio_title"
                name="bio_title"
              ></Input>
            </FormControl>
          </Box>

          <Box sx={muiStyles.bodyField}>
            <FormControl>
              <InputLabel htmlFor="bio">bio:</InputLabel>
              <Input
                type="text"
                id="bio"
                name="bio"
                multiline={true}
              ></Input>
            </FormControl>
           </Box>
           

          <Box sx={muiStyles.bodyField}>
            <FormControl>
              <InputLabel htmlFor="hero_image">Hero image:</InputLabel>
              <Input
                type="text"
                id="hero_image"
                name="hero_image"
                multiline={true}
              ></Input>
            </FormControl>
           </Box>
           
           
          <Box sx={muiStyles.bodyField}>
            <FormControl>
              <InputLabel htmlFor="hero_title">Hero title:</InputLabel>
              <Input
                type="text"
                id="hero_title"
                name="hero_title"
                multiline={true}
              ></Input>
            </FormControl>
           </Box>
           
           
          <Box sx={muiStyles.bodyField}>
            <FormControl>
              <InputLabel htmlFor="profile_image">Profile image:</InputLabel>
              <Input
                type="text"
                id="profile_image"
                name="profile_image"
                multiline={true}
              ></Input>
            </FormControl>
          </Box>


        </Box>
        <Button sx={muiStyles.saveButton} type="submit" variant="contained">
          Save
        </Button>
      </form>
    </Box>
   );
}

export default InfoAboutMe;
