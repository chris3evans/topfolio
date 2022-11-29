import styles from './info-about-me.module.css';
import muiStyles from './styles-info-about-me';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import { updateUser } from '../../utils/ApiService';

/* eslint-disable-next-line */
export interface InfoAboutMeProps {}

export function InfoAboutMe(props: InfoAboutMeProps) {

  const formSumbitHandler = async function (event: any) {
    try {
      event.preventDefault();

      const formData = {
        title: event.target.title.value,
        body: event.target.body.value,
      };

      const response = await updateUser(formData, '');
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
              <InputLabel htmlFor="title">Title:</InputLabel>
              <Input
                type="text"
                id="title"
                name="title"
              ></Input>
            </FormControl>
          </Box>

          <Box sx={muiStyles.bodyField}>
            <FormControl>
              <InputLabel htmlFor="body">body:</InputLabel>
              <Input
                type="text"
                id="body"
                name="body"
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
