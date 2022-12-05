import styles from './item-projects-blank.module.css';
import { Typography } from '@mui/material';
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
import { mockUserState } from '../mockUser';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import Link from '@mui/material/Link';

/* eslint-disable-next-line */
export interface ItemProjectsBlankProps {
  token: string;
}

export function ItemProjectsBlank(props: ItemProjectsBlankProps) {
  const [open, setOpen] = useState<boolean>(false);
  const toggleFromModal = function () {
    setOpen(!open)

  }


  ///might need cloudiany to crop the picture
  return (
    <>
      <Card sx={{ maxWidth: '100%' }}>
        <CardMedia
          component="img"
          height="auto"
          image={'../../assets/item-project-blank-Kate-Macate.jpg'}
          alt="project image one"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Project Name
          </Typography>
          <Typography gutterBottom variant="body1" >
            <GitHubIcon color={'action'} fontSize={'large'} titleAccess={'GitHub Link'}></GitHubIcon>
            <WebAssetIcon color={'action'} fontSize={'large'} titleAccess={'GitHub Link'} sx={{ marginLeft: '1.2rem' }}></WebAssetIcon>
          </Typography>
          <Typography gutterBottom variant="body1" color="text.secondary">
            My project is about project is about project is about project is about...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" onClick={toggleFromModal} >New Project</Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={toggleFromModal} maxWidth={"sm"} fullWidth>
        <DialogTitle>Create a Project</DialogTitle>
        <DialogContent >
          <FormProjects token={props.token} existingData={null} toggleFromModal={toggleFromModal}></FormProjects>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleFromModal} >Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ItemProjectsBlank;
