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

/* eslint-disable-next-line */
export interface ItemProjectsBlankProps { }

export function ItemProjectsBlank(props: ItemProjectsBlankProps) {
  const [open, setOpen] = useState<boolean>(false);
  const toggleFromModal = function () {
    setOpen(!open)

  }

  const handelSumbit = function () {

  }

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
          <Typography variant="body2" color="text.secondary">
            My project is about...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" onClick={toggleFromModal} >New Project</Button>
        </CardActions>
      </Card>
      <Dialog open={open} onClose={toggleFromModal}>
        <DialogTitle>New Project</DialogTitle>
        <DialogContent>
          <FormProjects token={" "} existingData={mockUserState.portfolio.projects[0]} listener={function a() { }}></FormProjects>
          {/* name: string;
  images: string[];
  description: string;
  github_url: string;
  app_url: string;
  _id: string; */}
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleFromModal}>Cancel</Button>
          <Button onClick={handelSumbit}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ItemProjectsBlank;
