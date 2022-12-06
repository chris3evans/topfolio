import styles from './form-work-experience.module.css';
import muiStyles from './styles-work-experience';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { updateUser } from '../../utils/ApiService';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../utils/UserContext';
import { WorkExperience } from '@topfolio/api-interfaces';
import UploadImageWidget from '../upload-image-widget/upload-image-widget';
import { useMediaQuery } from '@mui/material';

/* eslint-disable-next-line */
export interface FormWorkExperienceProps {
  token: string;
  existingData: WorkExperience | null;
  listener: Function | null;
}

export function FormWorkExperience(props: FormWorkExperienceProps) {
  const { userDetails, setUser } = useContext(UserContext);
  const [img, setImg] = useState<string>('');
  const getUploadedImage = (img: { url: string; id: string }) => {
    setImg(img.url);
  };

  const [companyField, setCompanyField] = useState('');

  const onCompanyChangeHandler = function (event: any) {
    setCompanyField(event.target.value);
  };

  useEffect(() => {
    if (userDetails) {
      console.log(userDetails, 'context here!!!');
      updateUser(userDetails, props.token).then((response) => {
        console.log(response, 'after context here');
      });
    }
  }, [userDetails]);

  const mediaQuery1200 = useMediaQuery('(max-width:1200px)');
  const mediaQuery900 = useMediaQuery('(max-width:900px)');
  const mediaQuery600 = useMediaQuery('(max-width:600px)');

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
          company_name: event.target.companyName.value,
          description: event.target.description.value,
          image: img,
          start_date: event.target.startDate.value,
          end_date: event.target.endDate.value,
          _id: props.existingData._id,
        };

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
        closeEditHandler();
      } else {
        event.preventDefault();

        const formData = {
          company_name: event.target.companyName.value,
          description: event.target.description.value,
          image: img,
          start_date: event.target.startDate.value,
          end_date: event.target.endDate.value,
        };

        setUser((current: any) => {
          return {
            ...current,
            portfolio: {
              ...current.portfolio,
              work_history: [...current.portfolio.work_history, formData],
            },
          };
        });
        closeEditHandler();
      }
    } catch (error) {
      console.error(error, 'front end error');
    }
  };

  return (
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
      <Typography align="center" sx={muiStyles.formTitle} variant="h2">
        Work Experience
      </Typography>
      <Box
        sx={
          mediaQuery900
            ? muiStyles['imageUploadContainer-900']
            : muiStyles['imageUploadContainer']
        }
      >
        <UploadImageWidget
          callback={getUploadedImage}
          buttonText={'Upload a picture'}
        />
      </Box>
      <form onSubmit={formSubmitHandler} className={styles['form-we']}>
        <Box
          sx={
            mediaQuery600
              ? muiStyles['formFields-600']
              : mediaQuery900
              ? muiStyles['formFields-900']
              : muiStyles['formFields']
          }
        >
          <Box
            sx={
              mediaQuery600
                ? muiStyles['companyField-600']
                : muiStyles['companyField']
            }
          >
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="company-name">Company Name:</InputLabel>
              <Input
                value={companyField}
                onChange={(event: any) => {
                  setCompanyField(event.target.value);
                }}
                type="text"
                required
                id="company name"
                name="companyName"
                defaultValue={props.existingData?.company_name}
                data-testid="test-company-name"
              ></Input>
            </FormControl>
          </Box>

          <Box
            sx={
              mediaQuery600
                ? muiStyles['descriptionField-600']
                : muiStyles['descriptionField']
            }
          >
            <FormControl>
              <InputLabel htmlFor="description">Description:</InputLabel>
              <Input
                type="text"
                required
                id="description"
                name="description"
                multiline={true}
                defaultValue={props.existingData?.description}
                data-testid="test-description"
              ></Input>
            </FormControl>
          </Box>

          <Box
            sx={
              mediaQuery600
                ? muiStyles['datesContainer-600']
                : muiStyles['datesContainer']
            }
          >
            <Box>
              <TextField
                sx={muiStyles.dateField}
                variant="standard"
                label="Start Date"
                name="startDate"
                defaultValue={props.existingData?.start_date}
                data-testid="test-start-date"
              ></TextField>
            </Box>

            <Box>
              <TextField
                sx={muiStyles.dateField}
                variant="standard"
                label="End Date"
                name="endDate"
                defaultValue={props.existingData?.end_date}
                data-testid="test-end-date"
              ></TextField>
            </Box>
          </Box>
        </Box>
        <Button sx={muiStyles.saveButton} type="submit" variant="contained">
          Save
        </Button>
      </form>
    </Box>
  );
}

export default FormWorkExperience;
