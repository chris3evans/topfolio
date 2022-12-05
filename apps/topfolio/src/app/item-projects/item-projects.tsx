import styles from './item-projects.module.css';
import muiStyles from './styles-item-projects';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { ListItem } from '@mui/material';
import { MyProjects } from '@topfolio/api-interfaces';
import EditIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { UserContext } from '../../utils/UserContext';
import { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormProjects from '../form-projects/form-projects';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import Link from '@mui/material/Link';
import { updateUser } from '../../utils/ApiService';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface ItemProjectsProps {
  project: MyProjects;
  token: string;
}

export function ItemProjects(props: ItemProjectsProps) {
  const { userDetails, setUser } = useContext(UserContext);
  const [open, setOpen] = useState<boolean>(false);


  const toggleFromModal = function () {
    setOpen(!open)

  }


  const deleteHandler = async function () {
    // console.log(projects.name, 'projects.name')
    console.log(props.project.name, 'props.project.name')
    setUser((current: any) => {
      return {
        ...current,
        portfolio: {
          ...current.portfolio,
          projects: [
            ...current.portfolio.projects.filter((projects: MyProjects) => {
              return projects.name !== props.project.name
            })
          ]
        }
      }
    })
  }
  //if props.project is empty
  return (
    <>
      <Card sx={{ maxWidth: '100%' }}>
        <CardMedia
          component="img"
          height="auto"
          image={props.project.images[props.project.images.length - 1]}
          alt="project image one"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" style={{ wordWrap: "break-word" }}>
            {props.project.name}
          </Typography>
          <Typography gutterBottom variant="body1" >
            <Link href={props.project.github_url} target="_blank" underline="none">
              <GitHubIcon color={'primary'} fontSize={'large'} titleAccess={'GitHub Link'}></GitHubIcon>
            </Link>
            <Link href={props.project.app_url} target="_blank" underline="none" sx={{ marginLeft: '1.2rem' }}>
              <WebAssetIcon color={'primary'} fontSize={'large'} titleAccess={'GitHub Link'}></WebAssetIcon>
            </Link>
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary" style={{ wordWrap: "break-word" }}>
            {props.project.description}
          </Typography>

        </CardContent>
        <CardActions>
          <Button size="medium" onClick={deleteHandler} >DELETE</Button>
          <Button size="medium" onClick={toggleFromModal}>Edit</Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={toggleFromModal} maxWidth={"sm"} fullWidth>
        <DialogTitle>Edit Your Project</DialogTitle>
        <DialogContent >
          <FormProjects
            token={props.token}
            existingData={props.project}
            toggleFromModal={toggleFromModal}
          ></FormProjects>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleFromModal}>Cancel</Button>
        </DialogActions>
      </Dialog>



      {/* <ListItem sx={muiStyles.listItem}>
        <div className={styles['iconButtons']} >
          <button onClick={deleteHandler} className={styles['deleteButton']}>
            <DeleteIcon sx={muiStyles.editIcon}></DeleteIcon>
          </button>
          <button onClick={openEditHandler} className={styles['editButton']}>
            <EditIcon sx={muiStyles.editIcon}></EditIcon>
          </button>
        </div>
        <Box sx={muiStyles.listItemGrid}>
          <Box sx={muiStyles.listItemGrid2}>
            <Typography sx={muiStyles.subHeading} variant="h6" >
              Name:{' '}
              <span className={styles['text']} data-testid={'projectName'}>{props.project.name}</span>
            </Typography>
            <img
              className={styles['listItemImage']}
              src={props.project.images[0]}
            ></img>
          </Box>

          <Box sx={muiStyles.description}>
            <Typography sx={muiStyles.subHeading} variant="h6">
              Description:{' '}
              <span className={styles['text']} data-testid={'projectDescription'} >{props.project.description}</span>
            </Typography>
          </Box>

          <Box sx={muiStyles.listItemGrid3}>
            <Box>
              <Typography variant="h6" sx={muiStyles.subHeading}>
                Github Link:
                <span className={styles['text']} data-testid={'projectGithubUrl'}>
                  {
                    props.project.github_url

                  }
                </span>
              </Typography>
            </Box>

            <Box>
              <Box>
                <Typography sx={muiStyles.subHeading} variant="h6">
                  App Link:
                  <span className={styles['text']} data-testid={'projectAppUrl'}>{props.project.app_url}</span>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </ListItem> */}
    </>
  );
}

export default ItemProjects;
