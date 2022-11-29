import Footer from '../footer/footer';
import HeroComponent from '../hero-component/hero-component';
import SectionsComponent from '../sections-component/sections-component';
import styles from './portfolio-page.module.css';
import { mockUserState } from '../mockUser';
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import {
  workHistoryAnimation,
  pageScrollAnimation,
  buttonRollOnScroll,
} from './animations';
export interface PortfolioPageProps {
  viewMode: boolean;
}

export function PortfolioPage(props: PortfolioPageProps) {
  useLayoutEffect(() => {
    if (props.viewMode) {
      const ctx = gsap.context(() => {
        workHistoryAnimation('#WorkHistory');
        pageScrollAnimation();
        buttonRollOnScroll('.animated-button');
      });
      return () => ctx.revert(); // cleanup
    }
    return;
  });
  return (
    <div className={styles['body']}>
      <HeroComponent user={mockUserState} />
      <SectionsComponent user={mockUserState} viewMode={props.viewMode} />
      <Footer
        viewMode={props.viewMode}
        github={mockUserState.portfolio.social_media.github}
        facebook={mockUserState.portfolio.social_media.facebook}
        linkedin={mockUserState.portfolio.social_media.linkedin}
      />
      {/* TODO MAKE THIS WORK WITH REAL USER */}
    </div>
  );
}

export default PortfolioPage;
