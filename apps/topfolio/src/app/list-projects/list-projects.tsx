import styles from './list-projects.module.css';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../utils/UserContext';
import ItemProjects from '../item-projects/item-projects';
import Box from '@mui/material/Box';
import { MyProjects } from '@topfolio/api-interfaces';
import ItemProjectsBlank from '../item-projects-blank/item-projects-blank';
import Grid from '@mui/material/Grid';
import { updateUser } from '../../utils/ApiService';
/* eslint-disable-next-line */
export interface ListProjectsProps {
  token: string
}
//This is the top level of the project form
export function ListProjects(props: ListProjectsProps) {
  const { userDetails, setUser } = useContext(UserContext);

  useEffect(() => {
    if (userDetails) {
      updateUser(userDetails, props.token).then((response) => {
      });
    }
  }, [userDetails]);


  return (
    <Box className={styles['container']}>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} key={"GridItems"}>
        <Grid item xs={12} sm={6} md={4} key={"GridBlank"}>
          <ItemProjectsBlank token={props.token} key={"keyBlank"}></ItemProjectsBlank>
        </Grid>
        {userDetails ? userDetails.portfolio.projects.map((project: MyProjects, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ItemProjects
              project={project}
              key={"items_" + index}
              token={props.token}
            ></ItemProjects>
          </Grid>
        )) : ""}
      </Grid>
    </Box>
  );
}

export default ListProjects;
