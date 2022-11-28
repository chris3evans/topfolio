import Footer from '../footer/footer';
import HeroComponent from '../hero-component/hero-component';
import SectionsComponent from '../sections-component/sections-component';
import styles from './portfolio-page.module.css';
import { mockUserState } from '../mockUser';
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import { workHistoryAnimation, projectsAnimation } from './animations';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
/* eslint-disable-next-line */
export interface PortfolioPageProps {}
const editMode = false;

export function PortfolioPage(props: PortfolioPageProps) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      workHistoryAnimation('#WorkHistory');
      projectsAnimation('#project-div');
    });

    return () => ctx.revert(); // cleanup
  });
  return (
    <div className={styles['body']}>
      <HeroComponent user={mockUserState} />
      <SectionsComponent user={mockUserState} editMode={editMode} />
      {/* <Footer
        github={mockUserState.portfolio.social_media.github}
        facebook={mockUserState.portfolio.social_media.facebook}
        linkedin={mockUserState.portfolio.social_media.linkedin}
      /> */}
      {/* TODO MAKE THIS WORK WITH REAL USER */}
    </div>
  );
}

export default PortfolioPage;
