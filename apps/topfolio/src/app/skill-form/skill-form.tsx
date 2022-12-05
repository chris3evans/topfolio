import styles from './skill-form.module.css';
import muiStyles from './styles-skill-form';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import { updateUser } from '../../utils/ApiService';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../utils/UserContext';
import Chip from '@mui/material/Chip';

/* eslint-disable-next-line */
export interface SkillFormProps {
    token: string;
}

export function SkillForm(props: SkillFormProps) {

  const { userDetails, setUser } = useContext(UserContext);

  const formSumbitHandler = async function (event: any) {
    try {
      event.preventDefault();
      const str: string = event.target.skill.value
      if (userDetails.portfolio.skills.includes(str)) {
        event.target.skill.value = ""
        return
      }
      const newUserDetails = {...userDetails,
            portfolio: {
              ...userDetails.portfolio,
              skills: [...userDetails.portfolio.skills, str]
        },
      }
      const response = await updateUser(newUserDetails, props.token);
      setUser(newUserDetails);
      
      event.target.skill.value = ""
    } catch (error) {
      console.error("error: ", error);
    }
  };


  const handleDelete = (label: String) => async () => {
     setUser((current: any) => {
          return {
            ...current,
            portfolio: {
              ...current.portfolio,
              skills: current.portfolio.skills.filter((Skill: string) => Skill !== label)
            },
          };
     });
    
    await updateUser(userDetails, props.token)
  }

   return (
    <Box sx={muiStyles.form}>
      <Typography align="center" sx={muiStyles.formTitle} variant="h2">
        Skills
      </Typography>
      <form onSubmit={formSumbitHandler} className={styles['form-we']}>
        <Box sx={muiStyles.formFields}>
          <Box sx={muiStyles.skillField}>
            <FormControl>
              <InputLabel htmlFor="skill">Skill:</InputLabel>
              <Input
                type="text"
                id="skill"
                name="skill"
                multiline={true}
              ></Input>
            </FormControl>
          </Box>
        </Box>
        <Button sx={muiStyles.saveButton} type="submit" variant="contained">
          Add Skill
        </Button>
       </form>

<Box sx={muiStyles.chips}>
         {userDetails.portfolio.skills.map((skill) => {
           return <Chip key={skill} sx={muiStyles.chip} color="primary" onDelete={handleDelete(skill)} label={skill}/>
         })}
</Box>

    </Box>
   );
}
export default SkillForm;
