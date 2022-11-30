import styles from './item-work-experience.module.css';
import muiStyles from './styles-item-work-experience';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { ListItem } from '@mui/material';
import { WorkExperience } from '@topfolio/api-interfaces';
import EditIcon from '@mui/icons-material/Create';
import FormWorkExperience from '../form-work-experience/form-work-experience';
import { listenerCount } from 'process';

/* eslint-disable-next-line */
export interface ItemWorkExperienceProps {
  workXp: WorkExperience;
  listener: Function;
}

export function ItemWorkExperience(props: ItemWorkExperienceProps) {
  const openEditHandler = function () {
    // setEditItemId(props.workXp._id);
    props.listener(props.workXp._id);
  };

  return (
    <ListItem sx={muiStyles.listItem} key={props.workXp._id}>
      <button onClick={openEditHandler} className={styles['editButton']}>
        <EditIcon sx={muiStyles.editIcon}></EditIcon>
      </button>
      <Box sx={muiStyles.listItemGrid}>
        <Box sx={muiStyles.listItemGrid2}>
          <Typography sx={muiStyles.subHeading} variant="h6">
            Company Name:{' '}
            <span className={styles['text']}>{props.workXp.company_name}</span>
          </Typography>
          <img
            className={styles['listItemImage']}
            src="../assets/google.png"
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
              <span className={styles['text']}>{props.workXp.start_date}</span>
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
