import { User } from '@topfolio/api-interfaces';
import MovingParagraphComponent from '../moving-paragraph-component/moving-paragraph-component';
import MovingTitleComponent from '../moving-title-component/moving-title-component';
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
      id="hero-component"
    >
      <div className={styles['box']}>
        {' '}
        <img src={props.user.portfolio.profile_image} alt="ProfilePic" />
      </div>
      <div className={styles['hero-text']}>
        <MovingTitleComponent text={props.user.name} alignCenter={false} />
        <MovingParagraphComponent text={props.user.portfolio.bio} />
      </div>
    </div>
  );
}

export default HeroComponent;
