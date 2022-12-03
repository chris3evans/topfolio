import styles from './bio-component.module.css';
import Button from '@mui/material/Button';
import MovingTitleComponent from '../moving-title-component/moving-title-component';
import MovingParagraphComponent from '../moving-paragraph-component/moving-paragraph-component';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import ContactMeDialog from '../contact-me-dialog/contact-me-dialog';
import { UserContext } from '../../utils/UserContext';
import { mockUserState } from '../mockUser';

/* eslint-disable-next-line */
export interface BioComponentProps {}

export function BioComponent(props: BioComponentProps) {
  const { userDetails } = useContext(UserContext);

  const title = userDetails.portfolio.bio_title || mockUserState.name;
  const bio = userDetails.portfolio.bio || mockUserState.portfolio.bio;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value: string) => {
    setOpen(false);
  };
  return (
    <div className={styles['container']} id="bio-component">
      <div className={styles['cont-flex']}>
        <div className={styles['text-cont']}>
          <MovingTitleComponent text={title} alignCenter={false} />
          <MovingParagraphComponent text={bio} />
        </div>
        <div className={styles['box']}>
          {' '}
          <img src={userDetails.portfolio.profile_image} alt="ProfilePicture" />
        </div>
      </div>
      <motion.div
        className={styles['button-box']}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <Button
          onClick={handleClickOpen}
          variant="contained"
          sx={{ width: 200, height: 50 }}
        >
          Contact me
        </Button>{' '}
      </motion.div>
      <ContactMeDialog open={open} onClose={handleClose} />
    </div>
  );
}

export default BioComponent;
