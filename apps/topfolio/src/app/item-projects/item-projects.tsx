import styles from './item-projects.module.css';
import muiStyles from './styles-item-projects';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { ListItem } from '@mui/material';
import { MyProjects } from '@topfolio/api-interfaces';
import EditIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { UserContext } from '../../utils/UserContext';
import { useContext, useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface ItemProjectsProps {
  project: MyProjects;
  listener: Function;
}

export function ItemProjects(props: ItemProjectsProps) {
  const { userDetails, setUser } = useContext(UserContext);
  const openEditHandler = function () {
    props.listener(props.project._id);
  };

  const deleteHandler = async function (event: any) {
    setUser((current: any) => {
      return {
        ...current,
        portfolio: {
          ...current.portfolio,
          projects: [
            ...current.portfolio.projects.filter((projects: MyProjects) => {
              return projects._id !== props.project._id
            })
          ]
        }
      }
    })
  }

  return (
    <ListItem sx={muiStyles.listItem}>
      <button onClick={deleteHandler} className={styles['deleteButton']}>
        <DeleteIcon sx={muiStyles.editIcon}></DeleteIcon>
      </button>
      <button onClick={openEditHandler} className={styles['editButton']}>
        <EditIcon sx={muiStyles.editIcon}></EditIcon>
      </button>
      <Box sx={muiStyles.listItemGrid}>
        <Box sx={muiStyles.listItemGrid2}>
          <Typography sx={muiStyles.subHeading} variant="h6">
            Name:{' '}
            <span className={styles['text']}>{props.project.name}</span>
          </Typography>
          <img
            className={styles['listItemImage']}
            src={props.project.images[0]}
          ></img>
        </Box>

        <Box sx={muiStyles.description}>
          <Typography sx={muiStyles.subHeading} variant="h6">
            Description:{' '}
            <span className={styles['text']}>{props.project.description}</span>
          </Typography>
        </Box>

        <Box sx={muiStyles.listItemGrid3}>
          <Box>
            <Typography variant="h6" sx={muiStyles.subHeading}>
              Github Link:
              <span className={styles['text']}>
                {
                  props.project.github_url
                  // ? convertIsoToDateString(props.workXp.start_date)
                }
              </span>
            </Typography>
          </Box>

          <Box>
            <Box>
              <Typography sx={muiStyles.subHeading} variant="h6">
                App Link:
                <span className={styles['text']}>{props.project.app_url}</span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </ListItem>
  );
}

export default ItemProjects;
