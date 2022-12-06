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
import { Typography } from '@mui/material';
import { Alert, AlertColor, Snackbar } from '@mui/material';
// import { Cloudinary } from "@cloudinary/url-gen";

export interface FormProjectsProps {
  token: string;
  existingData: MyProjects | null;
  toggleFromModal: Function
}

export function FormProjects(props: FormProjectsProps) {
  const { userDetails, setUser } = useContext(UserContext);
  const [imgArray, setImgArray] = useState<string[]>(props.existingData?.images || []);
  const [unsaved, setUnsaved] = useState(true);
  const [toast, setToast] = useState({ open: false, status: 'success', message: '' });
  //For handling error inside the form
  const showToast = (status: string, msg: string) => {
    setToast({ open: true, status, message: msg });
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    setToast({ open: false, status: 'success', message: '' });
  };

  const trackChanges = () => {
    if (imgArray.length > 0) setUnsaved(false);
  }

  const getUploadedImage = (img: { url: string; id: string }) => {
    const imgurl = img.url;
    setImgArray((array) => {
      return [...array, imgurl];
    });
    // trackChanges();
  };

  useEffect(() => {
    console.log(imgArray, "imgArray")
    if (props.existingData) {
      if (imgArray !== props.existingData.images) setUnsaved(false)
    }
    //cuz item-projects-blank has no existingData.
    else {
      if (imgArray.length > 0) setUnsaved(false)
    }

  }, [imgArray])

  const checkUniqueName = (name: string) => {
    return userDetails.portfolio.projects.some(project => project.name === name)
  }

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
        if (checkUniqueName(event.target.projectName.value) === true) {
          //display error
          event.preventDefault();
          setUnsaved(true)
          throw 'Project name already exists!';
        }
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
    } catch (error: any) {
      showToast('error', error);
    }
  };

  return (
    <Box sx={muiStyles.form}>
      <Snackbar open={toast.open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity={toast.status as AlertColor} sx={{ width: '100%', fontSize: '20px' }}>
          {toast.message}
        </Alert>
      </Snackbar>

      {imgArray.length > 0
        ? <img src={imgArray[imgArray.length - 1]}></img>
        : <Typography gutterBottom variant="h4" sx={{ textAlign: 'center' }}>Please select an image (*required)</Typography>
      }

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
                onChange={trackChanges}
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
                onChange={trackChanges}
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
                onChange={trackChanges}
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
                onChange={trackChanges}
              ></Input>
            </FormControl>
          </Box >
          <Box>
            <Button onClick={() => { props.toggleFromModal() }} sx={muiStyles.saveButton} type="button" variant="outlined">
              Cancel
            </Button>
            <Button sx={muiStyles.saveButton} type="submit" variant="contained" disabled={unsaved}>
              Save
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}

export default FormProjects;
