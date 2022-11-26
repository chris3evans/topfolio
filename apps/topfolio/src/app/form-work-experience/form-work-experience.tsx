import styles from './form-work-experience.module.css';
import TextField from '@mui/material/TextField';
import TextareaAutoSize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface FormWorkExperienceProps {}

export function FormWorkExperience(props: FormWorkExperienceProps) {
  return (
    <div className={styles['form']}>
      <h2 className={styles['heading-2']}>Work Experience</h2>
      <form className={styles['form-we']}>
        <div className={styles['form-we-fields']}>
          <div className={styles['form-we-company-field']}>
            <label htmlFor="company-name" className={styles['form-we-label']}>
              Company Name:
            </label>
            <TextField
              id="company-name"
              name="companyName"
              label="Company Name"
              variant="outlined"
              inputProps={{
                style: {
                  fontSize: '2rem',
                },
              }}
            ></TextField>
          </div>

          <div className={styles['form-we-description-field']}>
            <label htmlFor="description" className={styles['form-we-label']}>
              Description:
            </label>
            <TextareaAutoSize
              id="description"
              name="description"
              minRows={2}
              maxRows={10}
              placeholder="Describe your work experience"
              className={styles['form-we-input-textarea']}
            ></TextareaAutoSize>
          </div>

          <div className={styles['form-we-dates']}>
            <div className={styles['form-we-date-field']}>
              <label htmlFor="start-date" className={styles['form-we-label']}>
                Start Date:
              </label>
              <input
                id="start-date"
                name="startDate"
                className="form-we-input-date"
                type="date"
              ></input>
            </div>

            <div className={styles['form-we-date-field']}>
              <label htmlFor="finish-date" className={styles['form-we-label']}>
                Finish Date:
              </label>
              <input
                id="finish-date"
                name="finishDate"
                className="form-we-input-date"
                type="date"
              ></input>
            </div>
          </div>
        </div>
        <Button
          className={styles['submit-button']}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default FormWorkExperience;
