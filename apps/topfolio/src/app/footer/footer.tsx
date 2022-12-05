import styles from './footer.module.css';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { FcPhoneAndroid, FcInvite } from 'react-icons/fc';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
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
  const Footer = () => (
    <>
      <h3 style={{ fontSize: '2em' }}>TopFolio</h3>
      <div className={styles['links']}>
        <a aria-label="Topfolio Facebook link" href={''}>
          <FaFacebook />
        </a>
        <a aria-label="Topfolio Github link" href={''}>
          <FiGithub />
        </a>
        <a aria-label="Topfolio Linkedin link" href={''}>
          <FaLinkedin />
        </a>
      </div>
      <p style={{ fontSize: '2em' }}>© 2022 TopFolio. All rights reserved.</p>
    </>
  );
  const FooterView = () => (
    <>
      <div className={styles['contact-me']}>
        <div className={styles['links-vertical']}>
          {' '}
          <motion.a
            aria-label="Topfolio Facebook link"
            href={
              userDetails?.portfolio.contact_me?.social_media.facebook || ''
            }
            whileHover={{ scale: 2 }}
            transition={transition}
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            aria-label="Topfolio Github link"
            href={userDetails?.portfolio.contact_me?.social_media.github || ''}
            whileHover={{ scale: 2 }}
            transition={transition}
          >
            <FiGithub />
          </motion.a>
          <motion.a
            aria-label="Topfolio Linkedin link"
            href={
              userDetails?.portfolio.contact_me?.social_media.linkedin || ''
            }
            whileHover={{ scale: 2 }}
            transition={transition}
          >
            <FaLinkedin />
          </motion.a>
        </div>
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
              href={`mailto:${userDetails?.portfolio.contact_me?.email}`}
              className={styles['email-me']}
              whileHover={{ color: 'var(--primary)' }}
              transition={transition}
            >
              {userDetails?.portfolio.contact_me?.email}
            </motion.a>
          </motion.div>
          <div style={{ display: 'flex', gap: '0.3em' }}>
            <FcPhoneAndroid />
            <p>{userDetails?.portfolio.contact_me?.phone || ''}</p>
          </div>
        </div>
      </div>
      <p>© 2022 TopFolio. All rights reserved.</p>
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
