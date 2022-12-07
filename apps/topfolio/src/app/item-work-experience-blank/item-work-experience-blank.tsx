import styles from './item-work-experience-blank.module.css';
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
import FormWorkExperience from '../form-work-experience/form-work-experience';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box'

/* eslint-disable-next-line */
export interface ItemWorkExperienceBlankProps {
  token: string;
}

export function ItemWorkExperienceBlank(props: ItemWorkExperienceBlankProps) {
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
            image={'../../assets/item-work-experience-blank.jpg'}
            alt="work experience image one"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" sx={{ minHeight: "5rem" }}>
              My First Job
            </Typography>
            <Divider></Divider>

            <Typography gutterBottom variant="body1" sx={{ marginTop: '1.2rem', fontSize: "1.4rem" }} >
              From: .....  To: .....
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ minHeight: "6.9rem", fontSize: "1.75rem" }}>
              I worked for...
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="large" onClick={toggleFromModal} variant={'contained'} sx={{ fontSize: '1.35rem' }}>New Work Experience</Button>
          </CardActions>
        </Card>
      </Fade>
      <Dialog open={open} onClose={toggleFromModal} maxWidth={"sm"} fullWidth>
        <DialogContent >
          <FormWorkExperience token={props.token} existingData={null} toggleFromModal={toggleFromModal}></FormWorkExperience>
        </DialogContent>
      </Dialog>

    </>
  );
}

export default ItemWorkExperienceBlank;
