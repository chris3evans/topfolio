import { User } from '@topfolio/api-interfaces';
import styles from './hero-component.module.css';

/* eslint-disable-next-line */
export interface HeroComponentProps {
  user: User;
}

export function HeroComponent(props: HeroComponentProps) {
  return (
    <div
      className={styles['container']}
      style={{ backgroundImage: `url(${props.user.portfolio.hero_image})` }}
    >
      <div className={styles['box']}>
        {' '}
        <img src={props.user.portfolio.profile_image} alt="ProfilePic" />
      </div>
      <div className={styles['hero-text']}>
        <h1>{props.user.name}</h1>
        <p>{props.user.portfolio.description}</p>
      </div>
    </div>
  );
}

export default HeroComponent;
