import styles from './skill-form.module.css';
import muiStyles from './styles-skill-form';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import { updateUser } from '../../utils/ApiService';
import { useContext, useState } from 'react';
import { UserContext } from '../../utils/UserContext';
import Chip from '@mui/material/Chip';
import Slider from '@mui/material/Slider';
import { Skill } from '@topfolio/api-interfaces';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';

/* eslint-disable-next-line */
export interface SkillFormProps {
  token: string;
}

export function SkillForm(props: SkillFormProps) {
  const { userDetails, setUser } = useContext(UserContext);
  const [level, setLevel] = useState<any>(50);
  const [skill, setSkill] = useState('');

  const mediaQuery1200 = useMediaQuery('(max-width:1200px)');
  const mediaQuery900 = useMediaQuery('(max-width:900px)');
  const mediaQuery600 = useMediaQuery('(max-width:600px)');

  const formSumbitHandler = async function (event: any) {
    try {
      event.preventDefault();
      const str = +level;
      if (event.target.skill.value == '') {
        return;
      }
      const copy = { ...userDetails };
      let edited = false;
      copy.portfolio.skills.map((Skill: Skill) => {
        if (Skill.skill === event.target.skill.value) {
          Skill.level = level;
          edited = true;
        }
      });

      if (edited == false) {
        const obj: Skill = { skill: event.target.skill.value, level: str };
        const newUserDetails = {
          ...userDetails,
          portfolio: {
            ...userDetails.portfolio,
            skills: [...userDetails.portfolio.skills, obj],
          },
        };
        const response = await updateUser(newUserDetails, props.token);
        setUser(newUserDetails);
      } else {
        await updateUser(copy, props.token);
        setUser(copy);
      }

      event.target.skill.value = '';
      setLevel(50);
    } catch (error) {
      console.error('error: ', error);
    }
  };

  const changeValue = (event: any, value: any) => {
    setLevel(value);
  };

  const handleInputChange = (event: any) => {
    if (event.target.value > 100) {
      setLevel(100);
    } else if (event.target.value < 0) {
      setLevel(0);
    } else {
      setLevel(event.target.value);
    }
  };

  const handleEdit = (item: any) => () => {
    setSkill(item.skill);
    setLevel(item.level);
  };

  const handleDelete = (chosenSkill: Skill) => async () => {
    setUser((current: any) => {
      return {
        ...current,
        portfolio: {
          ...current.portfolio,
          skills: current.portfolio.skills.filter(
            (Skill: Skill) => Skill !== chosenSkill
          ),
        },
      };
    });

    await updateUser(userDetails, props.token);
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
        Skills
      </Typography>
      <form onSubmit={formSumbitHandler} className={styles['form-we']}>
        <Box sx={muiStyles.formFields}>
          <Box sx={muiStyles.skillField}>
            <FormControl fullWidth={true}>
              <InputLabel htmlFor="skill">Skill:</InputLabel>
              <Input
                key={skill}
                defaultValue={skill}
                type="text"
                id="skill"
                name="skill"
                multiline={true}
              ></Input>
            </FormControl>
          </Box>
          <Box>
            <Box
              sx={
                mediaQuery600
                  ? muiStyles['levelContainer-600']
                  : muiStyles['levelContainer']
              }
            >
              <Box
                sx={
                  mediaQuery900
                    ? muiStyles['slider-900']
                    : mediaQuery1200
                    ? muiStyles['slider-1200']
                    : muiStyles['slider']
                }
              >
                <Slider value={level} onChange={changeValue} />
              </Box>
              <Box
                sx={
                  mediaQuery900
                    ? muiStyles['numb-900']
                    : mediaQuery1200
                    ? muiStyles['numb-1200']
                    : muiStyles['numb']
                }
              >
                <Input
                  size="small"
                  id="level"
                  name="level"
                  value={level}
                  onChange={handleInputChange}
                  sx={{
                    '& .MuiInputBase-input': {
                      textAlign: 'center',
                    },
                  }}
                  inputProps={{
                    min: 0,
                    max: 100,
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Button sx={muiStyles.saveButton} type="submit" variant="contained">
          Add Skill
        </Button>
      </form>

      <Box sx={muiStyles.chips}>
        {userDetails.portfolio.skills.map((skill) => {
          return (
            <Chip
              key={skill.skill}
              sx={muiStyles.chip}
              onClick={handleEdit(skill)}
              color="primary"
              onDelete={handleDelete(skill)}
              label={skill.skill + '    |    value: ' + skill.level}
            />
          );
        })}
      </Box>
    </Box>
  );
}
export default SkillForm;
