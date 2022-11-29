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
import { UserContext } from '../../utils/UserContext';
import { useContext } from 'react';

/* eslint-disable-next-line */
export interface FormWorkExperienceProps {}

export function FormWorkExperience(props: FormWorkExperienceProps) {
  const context = useContext(UserContext);

  const formSumbitHandler = async function (event: any) {
    try {
      event.preventDefault();

      const formData = {
        company_name: event.target.companyName.value,
        description: event.target.description.value,
        start_date: event.target.startDate.value,
        end_date: event.target.finishDate.value,
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
        Work Experience
      </Typography>
      <form onSubmit={formSumbitHandler} className={styles['form-we']}>
        <Box sx={muiStyles.formFields}>
          <Box sx={muiStyles.companyField}>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="company-name">Company Name:</InputLabel>
              <Input
                type="text"
                required
                id="company name"
                name="companyName"
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
              ></Input>
            </FormControl>
          </Box>

          <Box sx={muiStyles.datesContainer}>
            <Box sx={muiStyles.dateField}>
              <FormControl>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DatePicker
                    value={Date.now()}
                    onChange={() => console.log('hi')}
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
                    value={Date.now()}
                    onChange={() => {
                      console.log('hello');
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
