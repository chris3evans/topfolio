import styles from './footer.module.css';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

/* eslint-disable-next-line */
export interface FooterProps {
  github: string;
  facebook: string;
  linkedin: string;
}

export function Footer(props: FooterProps) {
  return (
    <div className={styles['container']}>
      <h2>TopFolio</h2>
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
    </div>
  );
}

export default Footer;
