import { Typography } from '@mui/material';
import { useContext, useState } from 'react';
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
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';

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
      <Fade in={true} timeout={300}>
        <Card sx={{ maxWidth: '100%', backgroundColor: '#F5F5F5', '&:hover': { boxShadow: '-1px 5px 15px 0px rgba(57, 203, 215, 0.45)' } }}>
          <CardMedia
            component="img"
            height="190rem"
            image={'../../assets/item-project-blank-Kate-Macate.jpg'}
            alt="project image one"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" sx={{ minHeight: "5rem" }}>
              Project Name
            </Typography>
            <Divider></Divider>
            <Typography gutterBottom variant="body1" sx={{ marginTop: '1.2rem' }}>
              <GitHubIcon color={'action'} fontSize={'large'} titleAccess={'GitHub Link'}></GitHubIcon>
              <LinkIcon color={'action'} fontSize={'large'} titleAccess={'GitHub Link'} sx={{ marginLeft: '1.5rem' }}></LinkIcon>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ minHeight: "6.9rem", fontSize: "1.75rem" }}>
              My project is about...
            </Typography>

          </CardContent>

          <CardActions>
            <Button size="large" onClick={toggleFromModal} variant={'contained'} sx={{ fontSize: '1.35rem' }}>New Project</Button>
          </CardActions>
        </Card>
      </Fade>
      <Dialog open={open} onClose={toggleFromModal} maxWidth={"sm"} fullWidth>
        <DialogContent >
          <FormProjects token={props.token} existingData={null} toggleFromModal={toggleFromModal}></FormProjects>
        </DialogContent>
      </Dialog>

    </>
  );
}

export default ItemProjectsBlank;
