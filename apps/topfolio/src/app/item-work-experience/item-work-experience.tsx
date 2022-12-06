import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { ListItem } from '@mui/material';
import { WorkExperience } from '@topfolio/api-interfaces';
import { UserContext } from '../../utils/UserContext';
import { useContext, useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import FormWorkExperience from '../form-work-experience/form-work-experience';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';

/* eslint-disable-next-line */
export interface ItemWorkExperienceProps {
  WorkExperience: WorkExperience;
  token: string;
}

export function ItemWorkExperience(props: ItemWorkExperienceProps) {
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
          work_history: [
            ...current.portfolio.work_history.filter(
              (work_history: WorkExperience) => {
                return work_history.company_name !== props.WorkExperience.company_name;
              }
            ),
          ],
        },
      };
    });
  };

  return (
    <>
      <Fade in={true} timeout={350}>
        <Card sx={{ maxWidth: '100%', backgroundColor: '#F5F5F5', '&:hover': { boxShadow: '-1px 10px 20px 0px rgba(200,200,200,0.3)' } }}>
          <CardMedia
            component="img"
            height="190rem"
            image={props.WorkExperience.image}
            alt="project image one"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" style={{ wordWrap: "break-word" }} sx={{ minHeight: "5rem" }}>
              {props.WorkExperience.company_name}
            </Typography>
            <Divider></Divider>
            <Typography gutterBottom variant="body1" sx={{ marginTop: '1.2rem' }} >
              From: {props.WorkExperience.start_date}  To: {props.WorkExperience.end_date}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ wordWrap: "break-word", fontSize: "1.25rem" }} sx={{ minHeight: "6.9rem" }}>
              {props.WorkExperience.description}
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
          <FormWorkExperience
            token={props.token}
            existingData={props.WorkExperience}
            toggleFromModal={toggleFromModal}
          ></FormWorkExperience>
        </DialogContent>
      </Dialog>
    </>
    // <ListItem sx={muiStyles.listItem}>
    //   <div className={styles['iconButtons']}>
    //     <button
    //       data-testid="test-delete-button"
    //       onClick={deleteHandler}
    //       className={styles['deleteButton']}
    //     >
    //       <DeleteIcon sx={muiStyles.editIcon}></DeleteIcon>
    //     </button>
    //     <button
    //       data-testid="test-edit-button"
    //       onClick={openEditHandler}
    //       className={styles['editButton']}
    //     >
    //       <EditIcon sx={muiStyles.editIcon}></EditIcon>
    //     </button>
    //   </div>
    //   <Box sx={muiStyles.listItemGrid}>
    //     <Box sx={muiStyles.listItemGrid2}>
    //       <Typography sx={muiStyles.subHeading} variant="h6">
    //         Company Name:
    //         <span data-testid="test-company-name" className={styles['text']}>
    //           {props.workXp.company_name}
    //         </span>
    //       </Typography>
    //       <img
    //         className={styles['listItemImage']}
    //         src={props.workXp.image}
    //         data-testid="test-work-experience-image"
    //         alt={`${props.workXp.company_name} logo`}
    //       ></img>
    //     </Box>

    //     <Box sx={muiStyles.description}>
    //       <Typography sx={muiStyles.subHeading} variant="h6">
    //         Description:
    //         <span data-testid="test-description" className={styles['text']}>
    //           {props.workXp.description}
    //         </span>
    //       </Typography>
    //     </Box>

    //     <Box sx={muiStyles.listItemGrid3}>
    //       <Box>
    //         <Typography variant="h6" sx={muiStyles.subHeading}>
    //           Start:
    //           <span data-testid="test-start-date" className={styles['text']}>
    //             {
    //               props.workXp.start_date
    //               // ? convertIsoToDateString(props.workXp.start_date)
    //             }
    //           </span>
    //         </Typography>
    //       </Box>

    //       <Box>
    //         <Box>
    //           <Typography sx={muiStyles.subHeading} variant="h6">
    //             Finish:
    //             <span data-testid="test-end-date" className={styles['text']}>
    //               {props.workXp.end_date}
    //             </span>
    //           </Typography>
    //         </Box>
    //       </Box>
    //     </Box>
    //   </Box>
    // </ListItem>
  );
}

export default ItemWorkExperience;
