import styles from './list-projects.module.css';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../utils/UserContext';
import ItemProjects from '../item-projects/item-projects';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { MyProjects } from '@topfolio/api-interfaces';
import FormProjects from '../form-projects/form-projects';
import ItemProjectsBlank from '../item-projects-blank/item-projects-blank';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
/* eslint-disable-next-line */
export interface ListProjectsProps {
  token: string
}
//This is the top level of the project form
export function ListProjects(props: ListProjectsProps) {
  const { userDetails, setUser } = useContext(UserContext);
  const [editItemId, setEditItemId] = useState('');
  return (
    <Box className={styles['container']}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {userDetails ? userDetails.portfolio.projects.map((project: MyProjects) => (
          <Grid item xs={12} sm={6} md={4}>
            <ItemProjects
              project={project}
              key={project._id}
              token={props.token}
            ></ItemProjects>
          </Grid>
        )) : ""}
        <Grid item xs={12} sm={6} md={4}>
          <ItemProjectsBlank token={props.token}></ItemProjectsBlank>
        </Grid>
      </Grid>
      {/* <List>




        {userDetails ?
          userDetails.portfolio.projects.map(
            (project: MyProjects) => {
              return editItemId === project._id ? (
                <FormProjects
                  existingData={project}
                  token={props.token}
                  listener={setEditItemId}
                  key={project.name}
                ></FormProjects>
              ) : (
                <ItemProjects
                  project={project}
                  listener={setEditItemId}
                  key={`${project._id} + ${Math.random()}`}
                ></ItemProjects>
              );
            }
          ) : ''
        }
        <FormProjects
          existingData={null}
          token={props.token}
          listener={null}
          key={null}
        ></FormProjects>
      </List> */}
    </Box>
  );
}

export default ListProjects;
