import { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import MovingParagraphComponent from '../moving-paragraph-component/moving-paragraph-component';
import MovingTitleComponent from '../moving-title-component/moving-title-component';
import styles from './hero-component.module.css';

/* eslint-disable-next-line */
export interface HeroComponentProps {}

export function HeroComponent(props: HeroComponentProps) {
  const { userDetails } = useContext(UserContext);

  return (
    <div
      className={styles['container']}
      style={{
        backgroundImage: `linear-gradient(transparent 60%, var(--primary-background)),url(${userDetails.portfolio.hero_image})`,
      }}
      id="hero-component"
    >
      <div className={styles['hero-text']}>
        <div className={styles['hero-text-background']}></div>
        <MovingTitleComponent
          text={userDetails.name}
          alignCenter={false}
          html={'h1'}
        />
        <MovingParagraphComponent
          text={userDetails.portfolio.bio}
          alignCenter={true}
        />
      </div>
    </div>
  );
}

export default HeroComponent;
