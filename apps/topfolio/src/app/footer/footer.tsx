import styles from './footer.module.css';
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import { FcPhoneAndroid, FcInvite, FcBusinessman } from 'react-icons/fc';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import { Divider } from '@mui/material';
/* eslint-disable-next-line */
export interface FooterProps {
  viewMode: boolean;
}
const transition = {
  type: 'spring',
  stiffness: 400,
  damping: 10,
};

export function Footer(props: FooterProps) {
  const { userDetails } = useContext(UserContext);
  const user = userDetails.portfolio.contact_me.social_media;
  const Footer = () => (
    <>
      <div className={styles['links']}>
        <h3 style={{ fontSize: '2em' }}>TopFolio</h3>
        <a
          target="_blank"
          rel="noreferrer"
          aria-label="Topfolio Github link"
          href={'https://github.com/chris3evans/topfolio'}
        >
          <FiGithub />
        </a>
      </div>
      <div className={styles['credit']}>
        <span>Created by</span>
        <FcBusinessman />
        <a href="a">Fabrizio</a>
        <FcBusinessman />
        <a href="a">Noah</a>
        <FcBusinessman />
        <a href="a">Chris</a>
        <FcBusinessman />
        <a href="a">Chenhao</a>
        <FcBusinessman />
        <a href="a">Marco</a>
      </div>
      <p style={{ fontSize: '2em' }}>© 2022 TopFolio. All rights reserved.</p>
    </>
  );
  const FooterView = () => (
    <>
      <div className={styles['contact-me']}>
        <div className={styles['infos']}>
          <p>{userDetails.name}</p>
          <p>{userDetails.portfolio.contact_me.location}</p>
          <motion.div
            style={{ display: 'flex', gap: '0.3em' }}
            whileHover={{ scale: 2, color: 'var(--primary)', margin: '1em' }}
            transition={transition}
          >
            <FcInvite />
            <motion.a
              target="_blank"
              href={`mailto:${userDetails?.portfolio.contact_me?.email}`}
              className={styles['email-me']}
              whileHover={{ color: 'var(--primary)' }}
              transition={transition}
            >
              {userDetails.portfolio.contact_me.email}
            </motion.a>
          </motion.div>
          <div style={{ display: 'flex', gap: '0.3em' }}>
            <FcPhoneAndroid />

            <p>{userDetails.portfolio.contact_me.phone || ''}</p>
          </div>
          <div className={styles['links-vertical']}>
            {' '}
            {user.facebook !== '' && (
              <motion.a
                target="_blank"
                aria-label="Facebook link"
                href={user.facebook}
                whileHover={{ scale: 2 }}
                transition={transition}
              >
                <FaFacebook />
              </motion.a>
            )}
            {user.github !== '' && (
              <motion.a
                target="_blank"
                aria-label="Github link"
                href={user.github}
                whileHover={{ scale: 2 }}
                transition={transition}
              >
                <FiGithub />
              </motion.a>
            )}
            {user.linkedin !== '' && (
              <motion.a
                target="_blank"
                aria-label="Linkedin link"
                href={user.linkedin}
                whileHover={{ scale: 2 }}
                transition={transition}
              >
                <FaLinkedin />
              </motion.a>
            )}
            {user.instagram !== '' && (
              <motion.a
                target="_blank"
                aria-label="Instagram link"
                href={user.instagram}
                whileHover={{ scale: 2 }}
                transition={transition}
              >
                <FaInstagram />
              </motion.a>
            )}
            {user.twitter !== '' && (
              <motion.a
                target="_blank"
                aria-label="Twitter link"
                href={user.twitter}
                whileHover={{ scale: 2 }}
                transition={transition}
              >
                <FiTwitter />
              </motion.a>
            )}
            {user.youtube !== '' && (
              <motion.a
                target="_blank"
                aria-label="Youtube link"
                href={user.youtube}
                whileHover={{ scale: 2 }}
                transition={transition}
              >
                <FaYoutube />
              </motion.a>
            )}
          </div>
        </div>
      </div>
      <p id={styles['credits']}>© 2022 TopFolio. All rights reserved.</p>
    </>
  );
  return (
    <div
      className={props.viewMode ? styles['view-mode'] : styles['container']}
      id="footer"
    >
      {props.viewMode ? FooterView() : Footer()}{' '}
    </div>
  );
}

export default Footer;
