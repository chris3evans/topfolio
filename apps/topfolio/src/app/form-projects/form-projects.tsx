import styles from './form-projects.module.css';
import muiStyles from './styles-projects';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { updateUser } from '../../utils/ApiService';
import { UserContext } from '../../utils/UserContext';
import { useContext } from 'react';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import UploadImageWidget from '../upload-image-widget/upload-image-widget';

export interface FormProjectsProps { }
export function FormProjects(props: FormProjectsProps) {
  const context = useContext(UserContext);
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'divt6a0ys'
    }
  })
  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const myImage = cld.image('hefrxnlroorhexwk6gwx');

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(250).height(250));

  const formSubmitHandler = async function (event: any) {
    try {
      event.preventDefault();

      const formData = {
        company_name: event.target.projectName.value,
        description: event.target.description.value,
        start_date: event.target.gitUrl.value,
        end_date: event.target.appUrl.value,
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
        My Projects
      </Typography>
      {/* name: string;
  images: string[];
  description: string;
  github_url: string;
  app_url: string; */}
      <form onSubmit={formSubmitHandler} className={styles['form-we']}>
        <Box sx={muiStyles.formFields}>
          <AdvancedImage cldImg={myImage} />
          <UploadImageWidget />
          <Box sx={muiStyles.projectField}>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="project-name">Project Name:</InputLabel>
              <Input
                type="text"
                required
                id="project name"
                name="projectName"
              ></Input>
            </FormControl>

          </Box>



          <Box sx={muiStyles.descriptionField}>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="description">Description:</InputLabel>
              <Input
                type="text"
                required
                id="description"
                name="description"
                multiline={true}
              ></Input>
            </FormControl>
          </Box>

          <Box sx={muiStyles.gitUrlField}>
            <FormControl fullWidth={true}>


              <InputLabel htmlFor="git-url">Link to your Github Repo:</InputLabel>
              <Input
                type="text"
                required
                id="git url"
                name="gitUrl"
                multiline={true}
              ></Input>
            </FormControl>
          </Box>

          <Box sx={muiStyles.appUrlField}>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="app-url">Link to the App:</InputLabel>
              <Input
                type="text"
                required
                id="app url"
                name="appUrl"
                multiline={true}
              ></Input>
            </FormControl>
          </Box>
          <Button variant="contained" component="label">
            Upload Picture
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Button sx={muiStyles.saveButton} type="submit" variant="contained">
            Save
          </Button>
        </Box>

      </form>
    </Box>
  );
}

export default FormProjects;