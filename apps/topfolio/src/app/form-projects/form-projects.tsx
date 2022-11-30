import styles from './form-projects.module.css';
import muiStyles from './styles-projects';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import { updateUser } from '../../utils/ApiService';
import { UserContext } from '../../utils/UserContext';
import { useContext, useEffect, useState } from 'react';
import UploadImageWidget from '../upload-image-widget/upload-image-widget';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import { Cloudinary } from "@cloudinary/url-gen";

export interface FormProjectsProps {
  token: string
}


export function FormProjects(props: FormProjectsProps) {
  const { userDetails, setUser } = useContext(UserContext);
  const [imgArray, setImageArray] = useState<{ url: string, id: string }[]>([]);
  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: 'divt6a0ys'
  //   }
  // })
  // const myImage = cld.image('hefrxnlroorhexwk6gwx');
  // // Resize to 250 x 250 pixels using the 'fill' crop mode.
  // myImage.resize(fill().width(250).height(250));
  const getUploadedImage = (img: { url: string, id: string }) => {
    setImageArray(array => {
      return [
        ...array,
        img
      ]
    });

  }

  const deleteImage = (id: string) => {
    setImageArray(array => {
      return array.filter(img => img.id !== id);
    });
  }

  useEffect(() => {
    console.log("IMAGE ARRAY:", imgArray);
  }, [imgArray])

  const formSubmitHandler = async function (event: any) {
    try {
      event.preventDefault();

      const formData = {
        company_name: event.target.projectName.value,
        images: imgArray,
        description: event.target.description.value,
        start_date: event.target.gitUrl.value,
        end_date: event.target.appUrl.value,

      };
      // setUser()
      const response = await updateUser(formData, props.token);
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
      <ImageList sx={{ width: 300, height: 250 }} cols={1} rowHeight={120}>
        {imgArray.map((img, index) => (
          <ImageListItem key={index}>
            <img
              src={`${img.url}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${img.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
              onClick={() => deleteImage(img.id)}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <UploadImageWidget callback={getUploadedImage} />
      <form onSubmit={formSubmitHandler} className={styles['form-we']}>
        <Box sx={muiStyles.formFields}>

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
          <Button sx={muiStyles.saveButton} type="submit" variant="contained">
            Save
          </Button>
        </Box>

      </form>
    </Box>
  );
}

export default FormProjects;