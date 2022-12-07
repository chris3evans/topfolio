import styles from './form-work-experience.module.css';
import muiStyles from './styles-work-experience';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../utils/UserContext';
import { WorkExperience } from '@topfolio/api-interfaces';
import UploadImageWidget from '../upload-image-widget/upload-image-widget';
import { Alert, AlertColor, Snackbar } from '@mui/material';

/* eslint-disable-next-line */
export interface FormWorkExperienceProps {
  token: string;
  existingData: WorkExperience | null;
  toggleFromModal: Function;
}

export function FormWorkExperience(props: FormWorkExperienceProps) {
  const { userDetails, setUser } = useContext(UserContext);
  const [img, setImg] = useState<string>(props.existingData?.image || '');
  const [unsaved, setUnsaved] = useState(true);
  const [toast, setToast] = useState({
    open: false,
    status: 'success',
    message: '',
  });

  //For handling error inside the form
  const showToast = (status: string, msg: string) => {
    setToast({ open: true, status, message: msg });
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    setToast({ open: false, status: 'success', message: '' });
  };

  const trackChanges = () => {
    if (img.length > 0) setUnsaved(false);
  };
  const getUploadedImage = (img: { url: string; id: string }) => {
    setImg(img.url);
  };

  useEffect(() => {
    console.log(img.length, 'img.length');
    if (props.existingData) {
      if (img !== props.existingData.image) setUnsaved(false);
    }
    //cuz item-projects-blank has no existingData.
    else {
      if (img.length > 0) setUnsaved(false);
    }
  }, [img]);

  const checkUniqueName = (company_name: string) => {
    return userDetails.portfolio.work_history.some(
      (work_history) => work_history.company_name === company_name
    );
  };

  const formSubmitHandler = async function (event: any) {
    try {
      if (props.existingData) {
        event.preventDefault();

        const formExistingData = {
          company_name: event.target.companyName.value,
          description: event.target.description.value,
          image: img,
          start_date: event.target.startDate.value,
          end_date: event.target.endDate.value,
          _id: props.existingData._id,
        };
        console.log(formExistingData, 'work experience data');

        setUser((current: any) => {
          return {
            ...current,
            portfolio: {
              ...current.portfolio,
              work_history: [
                ...current.portfolio.work_history.map(
                  (workExperience: WorkExperience) => {
                    if (
                      workExperience.company_name ===
                      props.existingData?.company_name
                    ) {
                      return formExistingData;
                    } else {
                      return workExperience;
                    }
                  }
                ),
              ],
            },
          };
        });
      } else {
        if (checkUniqueName(event.target.companyName.value) === true) {
          //display error
          event.preventDefault();
          setUnsaved(true);
          throw 'Project name already exists!';
        }
        event.preventDefault();

        const formData = {
          company_name: event.target.companyName.value,
          description: event.target.description.value,
          image: img,
          start_date: event.target.startDate.value,
          end_date: event.target.endDate.value,
        };

        console.log(formData, 'work experience data');

        setUser((current: any) => {
          return {
            ...current,
            portfolio: {
              ...current.portfolio,
              work_history: [...current.portfolio.work_history, formData],
            },
          };
        });
      }
      props.toggleFromModal();
    } catch (error: any) {
      showToast('error', error);
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
          sx={{ width: '100%', fontSize: '20px' }}
        >
          {toast.message}
        </Alert>
      </Snackbar>

      {img ? (
        <img src={img}></img>
      ) : (
        <Typography gutterBottom variant="h4" sx={{ textAlign: 'center' }}>
          Please select an image (*required)
        </Typography>
      )}

      <Box sx={muiStyles.imageUploadContainer}>
        <UploadImageWidget
          callback={getUploadedImage}
          buttonText={'Upload Project Image'}
        />
      </Box>
      <form onSubmit={formSubmitHandler} className={styles['form-we']}>
        <Box>
          <Box sx={muiStyles.companyField}>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="company-name">Company Name:</InputLabel>
              <Input
                type="text"
                required
                id="company-name"
                name="companyName"
                multiline={true}
                defaultValue={props.existingData?.company_name}
                data-testid={'test-company-name'}
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

          <Box sx={muiStyles.datesContainer}>
            <div className={styles['date-field']}>
              <label className={styles['date-label']} htmlFor="start-date">
                Start Date:
              </label>
              <input
                defaultValue={props.existingData?.start_date}
                className={styles['date-input']}
                type="date"
                id="start-date"
                name="startDate"
                required
                onChange={trackChanges}
              ></input>
            </div>

            <div className={styles['date-field']}>
              <label className={styles['date-label']} htmlFor="end-date">
                End Date:
              </label>
              <input
                defaultValue={props.existingData?.end_date}
                className={styles['date-input']}
                type="date"
                id="end-date"
                name="endDate"
                required
                onChange={trackChanges}
              ></input>
            </div>
          </Box>

          <Box>
            <Button
              onClick={() => {
                props.toggleFromModal();
              }}
              sx={muiStyles.saveButton}
              type="button"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              sx={muiStyles.saveButton}
              type="submit"
              variant="contained"
              disabled={unsaved}
            >
              Save
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}

export default FormWorkExperience;
