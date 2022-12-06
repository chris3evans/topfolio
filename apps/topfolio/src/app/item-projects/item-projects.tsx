import { Typography } from '@mui/material';
import { MyProjects } from '@topfolio/api-interfaces';
import { UserContext } from '../../utils/UserContext';
import { useContext, useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormProjects from '../form-projects/form-projects';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';

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

  return (
    <>
      <Fade in={true} timeout={350}>
        <Card sx={{ maxWidth: '100%', backgroundColor: '#F5F5F5', '&:hover': { boxShadow: '-1px 10px 20px 0px rgba(200,200,200,0.3)' } }}>
          <CardMedia
            component="img"
            height="190rem"
            image={props.project.images[props.project.images.length - 1]}
            alt="project image one"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" style={{ wordWrap: "break-word" }} sx={{ minHeight: "5rem" }}>
              {props.project.name}
            </Typography>
            <Divider></Divider>
            <Typography gutterBottom variant="body1" sx={{ marginTop: '1.2rem' }}>
              <Link href={props.project.github_url} target="_blank" underline="none">
                <GitHubIcon color={'primary'} fontSize={'large'} titleAccess={'GitHub Link'}></GitHubIcon>
              </Link>
              <Link href={props.project.app_url} target="_blank" underline="none" sx={{ marginLeft: '1.2rem' }}>
                <LinkIcon color={'primary'} fontSize={'large'} titleAccess={'Your App Link'}></LinkIcon>
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ wordWrap: "break-word", fontSize: "1.5rem" }} sx={{ minHeight: "6.9rem" }}>
              {props.project.description}
            </Typography>

          </CardContent>
          <CardActions>
            <Button size="medium" onClick={deleteHandler} color={'error'}>DELETE</Button>
            <Button size="medium" onClick={toggleFromModal} >Edit</Button>
          </CardActions>
        </Card>
      </Fade>

      <Dialog open={open} onClose={toggleFromModal} maxWidth={"sm"} fullWidth>
        <DialogContent >
          <FormProjects
            token={props.token}
            existingData={props.project}
            toggleFromModal={toggleFromModal}
          ></FormProjects>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ItemProjects;
