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
import { MyProjects } from '@topfolio/api-interfaces';
// import { Cloudinary } from "@cloudinary/url-gen";

export interface FormProjectsProps {
  token: string;
  existingData: MyProjects | null;
  listener: Function | null;
}


export function FormProjects(props: FormProjectsProps) {
  const { userDetails, setUser } = useContext(UserContext);
  // const [imgArray, setImageArray] = useState<{ url: string, id: string }[]>([]);
  const [imgArray, setImageArray] = useState<string[]>([]);
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
    const imgurl = img.url
    setImageArray(array => {
      return [
        ...array,
        imgurl
      ]
    });

  }

  const deleteImage = (img: string) => {
    setImageArray(array => {
      return array.filter(url => url !== img);
    });
  }

  useEffect(() => {
    if (userDetails) {
      updateUser(userDetails, props.token).then((response) => {
        console.log(response, 'here')
      });
    }
  }, [userDetails?.portfolio.projects])

  const closeEditHandler = function () {
    if (props.listener) {
      props.listener('1');
    }
  };

  const formSubmitHandler = async function (event: any) {
    try {
      if (props.existingData) {
        event.preventDefault();

        const formExistingData = {
          name: event.target.projectName.value,
          images: imgArray,
          description: event.target.description.value,
          github_url: event.target.gitUrl.value,
          app_url: event.target.appUrl.value,
          _id: props.existingData._id
        };
        setUser((current: any) => {
          return {
            ...current,
            portfolio: {
              ...current.portfolio,
              projects: [
                ...current.portfolio.projects.map(
                  (projects: MyProjects) => {
                    if (projects._id === props.existingData?._id) {
                      return formExistingData;
                    } else {
                      return projects;
                    }
                  }
                ),
              ],
            },
          };
        }); closeEditHandler();

      } else {
        event.preventDefault();
        const formData = {
          name: event.target.projectName.value,
          images: imgArray,
          description: event.target.description.value,
          github_url: event.target.gitUrl.value,
          app_url: event.target.appUrl.value,
        };
        setUser((current: any) => {
          return {
            ...current, portfolio: {
              ...current.portfolio, projects: [
                ...current.portfolio.projects, formData]
            }
          }
        }
        )
        closeEditHandler();
      }

      // if (userDetails) {
      //   const response = await updateUser(userDetails, props.token);
      //   console.log(response);
      // }

    } catch (error) {
      console.error(error, 'front end error');
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
              src={`${img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
              onClick={() => deleteImage(img)}
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
                defaultValue={props.existingData?.name}
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
                defaultValue={props.existingData?.description}
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
                defaultValue={props.existingData?.github_url}
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
                defaultValue={props.existingData?.app_url}
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