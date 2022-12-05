import styles from './form-projects.module.css';
import muiStyles from './styles-projects';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { updateUser } from '../../utils/ApiService';
import { UserContext } from '../../utils/UserContext';
import { useContext, useEffect, useState } from 'react';
import UploadImageWidget from '../upload-image-widget/upload-image-widget';
import { MyProjects } from '@topfolio/api-interfaces';
// import { Cloudinary } from "@cloudinary/url-gen";

export interface FormProjectsProps {
  token: string;
  existingData: MyProjects | null;
  toggleFromModal: Function
}

export function FormProjects(props: FormProjectsProps) {
  const { userDetails, setUser } = useContext(UserContext);
  const [imgArray, setImgArray] = useState<string[]>(props.existingData?.images || []);
  const getUploadedImage = (img: { url: string; id: string }) => {
    const imgurl = img.url;
    setImgArray((array) => {
      return [...array, imgurl];
    });
  };

  useEffect(() => {
    if (userDetails) {
      updateUser(userDetails, props.token).then((response) => {
      });
    }
  }, [userDetails]);

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
          _id: props.existingData._id,
        };

        setUser((current: any) => {
          return {
            ...current,
            portfolio: {
              ...current.portfolio,
              projects: [
                ...current.portfolio.projects.map((projects: MyProjects) => {
                  if (projects.name === props.existingData?.name) {
                    return formExistingData;
                  } else {
                    return projects;
                  }
                }),
              ],
            },
          };
        });
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
            ...current,
            portfolio: {
              ...current.portfolio,
              projects: [...current.portfolio.projects, formData],
            },
          };
        });
      }
      props.toggleFromModal()
    } catch (error) {
      console.error(error, 'front end error');
    }
  };

  return (
    <Box sx={muiStyles.form}>
      <img src={imgArray[0]}></img>
      <Box sx={muiStyles.imageUploadContainer}>
        <UploadImageWidget callback={getUploadedImage} buttonText={'Upload Project Image'} />
      </Box>
      <form onSubmit={formSubmitHandler} className={styles['form-projects']}>
        <Box sx={muiStyles.formFields}>
          <Box sx={muiStyles.projectField}>
            <FormControl fullWidth={true}>
              <InputLabel
                htmlFor="project-name"
                data-testid={'projectNameLabel'}
              >
                Project Name:
              </InputLabel>
              <Input
                type="text"
                required
                id="project-name"
                name="projectName"
                multiline={true}
                defaultValue={props.existingData?.name}
                data-testid={'projectNameInput'}
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
                data-testid={'descriptionInput'}
              ></Input>
            </FormControl>
          </Box>

          <Box sx={muiStyles.gitUrlField}>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="git-url">
                Link to your Github Repo:
              </InputLabel>
              <Input
                type="text"
                required
                id="git-url"
                name="gitUrl"
                multiline={true}
                defaultValue={props.existingData?.github_url}
                data-testid={'gitUrlInput'}
              ></Input>
            </FormControl>
          </Box>

          <Box sx={muiStyles.appUrlField}>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="app-url">Link to the App:</InputLabel>
              <Input
                type="text"
                required
                id="app-url"
                name="appUrl"
                multiline={true}
                defaultValue={props.existingData?.app_url}
                data-testid={'appUrlInput'}
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
