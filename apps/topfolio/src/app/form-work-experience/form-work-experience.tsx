import styles from './form-work-experience.module.css';
import muiStyles from './styles-work-experience';
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
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../utils/UserContext';
import { WorkExperience } from '@topfolio/api-interfaces';

/* eslint-disable-next-line */
export interface FormWorkExperienceProps {
  token: string;
  existingData: WorkExperience | null;
  listener: Function | null;
}

export function FormWorkExperience(props: FormWorkExperienceProps) {
  const { userDetails, setUser } = useContext(UserContext);

  const [startDate, setStartDate] = useState(props.existingData?.start_date);
  const [endDate, setEndDate] = useState(props.existingData?.end_date);

  useEffect(() => {
    if (userDetails) {
      updateUser(userDetails, props.token).then((response) => {
        console.log(response, 'here');
      });
    }
  }, [userDetails?.portfolio.work_history]);

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
          image: '',
          start_date: startDate,
          end_date: endDate,
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
                    if (workExperience._id === props.existingData?._id) {
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
          image: '',
          start_date: startDate,
          end_date: endDate,
        };

        setUser((current) => {
          // @ts-ignore
          current.portfolio.work_history.push(formData);
          return current;
        });
        // @ts-ignore
        const response = await updateUser(userDetails, props.token);
        console.log(response);
        closeEditHandler();
      }
    } catch (error) {
      console.error(error, 'front end error');
    }
  };

  return (
    <Box sx={muiStyles.form}>
      <Typography align="center" sx={muiStyles.formTitle} variant="h2">
        Work Experience
      </Typography>
      <form onSubmit={formSubmitHandler} className={styles['form-we']}>
        <Box sx={muiStyles.formFields}>
          <Box sx={muiStyles.companyField}>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="company-name">Company Name:</InputLabel>
              <Input
                type="text"
                required
                id="company name"
                name="companyName"
                defaultValue={props.existingData?.company_name}
              ></Input>
            </FormControl>
          </Box>

          <Box sx={muiStyles.descriptionField}>
            <FormControl>
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

          <Box sx={muiStyles.datesContainer}>
            <Box sx={muiStyles.dateField}>
              <FormControl>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker
                    value={startDate}
                    onChange={(newValue: any) => {
                      console.log(newValue);
                      setStartDate(newValue);
                    }}
                    renderInput={(props: any) => (
                      <TextField
                        required
                        type="date"
                        name="startDate"
                        variant="standard"
                        {...props}
                      />
                    )}
                    label="Start"
                    inputFormat="DD/MM/YYYY"
                  ></DatePicker>
                </LocalizationProvider>
              </FormControl>
            </Box>

            <Box sx={muiStyles.dateField}>
              <FormControl>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker
                    label="Finish"
                    value={endDate}
                    onChange={(newValue: any) => {
                      console.log(newValue);
                      setEndDate(newValue._d);
                    }}
                    renderInput={(props: any) => (
                      <TextField
                        type="date"
                        required
                        name="finishDate"
                        variant="standard"
                        {...props}
                      />
                    )}
                    inputFormat="DD/MM/YYYY"
                  ></DatePicker>
                </LocalizationProvider>
              </FormControl>
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
