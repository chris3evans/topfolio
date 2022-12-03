import { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import { mockUserState } from '../mockUser';
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
        backgroundImage: `linear-gradient(transparent 60%, var(--primary-background)),url(${
          userDetails.portfolio.hero_image || mockUserState.portfolio.hero_image
        })`,
      }}
      id="hero-component"
    >
      <div className={styles['box']}>
        {' '}
        <img
          src={
            userDetails.portfolio.profile_image ||
            mockUserState.portfolio.profile_image
          }
          alt="ProfilePic"
        />
      </div>
      <div className={styles['hero-text']}>
        <MovingTitleComponent
          text={userDetails.name || mockUserState.name}
          alignCenter={false}
        />
        <MovingParagraphComponent
          text={userDetails.portfolio.hero_title || mockUserState.portfolio.bio}
        />
      </div>
    </div>
  );
}

export default HeroComponent;
