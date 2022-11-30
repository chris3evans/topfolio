import styles from './footer.module.css';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

import { mockUserState } from '../mockUser';
import { FcPhoneAndroid, FcInvite } from 'react-icons/fc';
import { motion } from 'framer-motion';
/* eslint-disable-next-line */
export interface FooterProps {
  github: string;
  facebook: string;
  linkedin: string;
  viewMode: boolean;
}
const transition = {
  type: 'spring',
  stiffness: 400,
  damping: 10,
};

export function Footer(props: FooterProps) {
  const Footer = () => (
    <>
      <h3 style={{ fontSize: '2em' }}>TopFolio</h3>
      <div className={styles['links']}>
        <a aria-label="Topfolio Facebook link" href={props.facebook || ''}>
          <FaFacebook />
        </a>
        <a aria-label="Topfolio Github link" href={props.github || ''}>
          <FiGithub />
        </a>
        <a aria-label="Topfolio Linkedin link" href={props.linkedin || ''}>
          <FaLinkedin />
        </a>
      </div>
      <p style={{ fontSize: '2em' }}>© 2022 TopFolio. All rights reserved.</p>
    </>
  );
  const FooterView = () => (
    <>
      <h3>Contact me</h3>
      <div className={styles['contact-me']}>
        <div className={styles['links-vertical']}>
          {' '}
          <motion.a
            aria-label="Topfolio Facebook link"
            href={props.facebook || ''}
            whileHover={{ scale: 2 }}
            transition={transition}
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            aria-label="Topfolio Github link"
            href={props.github || ''}
            whileHover={{ scale: 2 }}
            transition={transition}
          >
            <FiGithub />
          </motion.a>
          <motion.a
            aria-label="Topfolio Linkedin link"
            href={props.linkedin || ''}
            whileHover={{ scale: 2 }}
            transition={transition}
          >
            <FaLinkedin />
          </motion.a>
        </div>
        <div className={styles['infos']}>
          <p>{mockUserState.name}</p>
          {/* TODO ADD PROPER USER CONNECTION */}
          <p>Manchester,Uk</p>
          <div style={{ display: 'flex', gap: '0.3em' }}>
            <FcInvite />
            <p>TestEmail@gmail.com</p>
          </div>
          <div style={{ display: 'flex', gap: '0.3em' }}>
            <FcPhoneAndroid />
            <p>+44 12300011</p>
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
