import styles from './item-work-experience.module.css';
import muiStyles from './styles-item-work-experience';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { ListItem } from '@mui/material';
import { WorkExperience } from '@topfolio/api-interfaces';
import EditIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { UserContext } from '../../utils/UserContext';
import { useContext } from 'react';

/* eslint-disable-next-line */
export interface ItemWorkExperienceProps {
  workXp: WorkExperience;
  listener: Function;
  company_name: String;
}

export function ItemWorkExperience(props: ItemWorkExperienceProps) {
  const { userDetails, setUser } = useContext(UserContext);

  const openEditHandler = function () {
    props.listener(props.workXp._id);
  };
  // userDetails?.portfolio.work_history.
  const deleteHandler = async function () {
    // console.log(workExp.company_name, 'workExp.company_name')
    console.log(props.company_name, 'props.company_name')
    setUser((current: any) => {
      return {
        ...current,
        portfolio: {
          ...current.portfolio,
          work_history: [
            ...current.portfolio.work_history.filter((work_history: WorkExperience) => {
              return work_history.company_name !== props.company_name
            })
          ]
        }
      }
    })
    console.log(userDetails, "userdetails")
  }

  return (
    <ListItem sx={muiStyles.listItem}>
      <div className={styles['iconButtons']}>
        <button onClick={deleteHandler} className={styles['deleteButton']}>
          <DeleteIcon sx={muiStyles.editIcon}></DeleteIcon>
        </button>
        <button onClick={openEditHandler} className={styles['editButton']}>
          <EditIcon sx={muiStyles.editIcon}></EditIcon>
        </button>
      </div>
      <Box sx={muiStyles.listItemGrid}>
        <Box sx={muiStyles.listItemGrid2}>
          <Typography sx={muiStyles.subHeading} variant="h6">
            Company Name:{' '}
            <span className={styles['text']}>{props.workXp.company_name}</span>
          </Typography>
          <img
            className={styles['listItemImage']}
            src={props.workXp.image}
          ></img>
        </Box>

        <Box sx={muiStyles.description}>
          <Typography sx={muiStyles.subHeading} variant="h6">
            Description:{' '}
            <span className={styles['text']}>{props.workXp.description}</span>
          </Typography>
        </Box>

        <Box sx={muiStyles.listItemGrid3}>
          <Box>
            <Typography variant="h6" sx={muiStyles.subHeading}>
              Start:
              <span className={styles['text']}>
                {
                  props.workXp.start_date
                  // ? convertIsoToDateString(props.workXp.start_date)
                }
              </span>
            </Typography>
          </Box>

          <Box>
            <Box>
              <Typography sx={muiStyles.subHeading} variant="h6">
                Finish:
                <span className={styles['text']}>{props.workXp.end_date}</span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </ListItem>
  );
}

export default ItemWorkExperience;
