import styles from './footer.module.css';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { mockUserState } from '../mockUser';
import { FcPhoneAndroid, FcInvite } from 'react-icons/fc';
/* eslint-disable-next-line */
export interface FooterProps {
  github: string;
  facebook: string;
  linkedin: string;
  viewMode: boolean;
}

export function Footer(props: FooterProps) {
  const Footer = () => (
    <>
      <h3>TopFolio</h3>
      <div className={styles['links']}>
        <a aria-label="Topfolio Facebook link" href={props.facebook || ''}>
          <AiFillFacebook />
        </a>
        <a aria-label="Topfolio Github link" href={props.github || ''}>
          <AiFillGithub />
        </a>
        <a aria-label="Topfolio Linkedin link" href={props.linkedin || ''}>
          <AiFillLinkedin />
        </a>
      </div>
      <p>© 2022 TopFolio. All rights reserved.</p>
    </>
  );
  const FooterView = () => (
    <>
      <h3>Contact me</h3>
      <div className={styles['contact-me']}>
        <div className={styles['links-vertical']}>
          {' '}
          <a aria-label="Topfolio Facebook link" href={props.facebook || ''}>
            <AiFillFacebook />
          </a>
          <a aria-label="Topfolio Github link" href={props.github || ''}>
            <AiFillGithub />
          </a>
          <a aria-label="Topfolio Linkedin link" href={props.linkedin || ''}>
            <AiFillLinkedin />
          </a>
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
    <div className={props.viewMode ? styles['view-mode'] : styles['container']}>
      {props.viewMode ? FooterView() : Footer()}{' '}
    </div>
  );
}

export default Footer;
