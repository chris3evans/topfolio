import Footer from '../footer/footer';
import HeroComponent from '../hero-component/hero-component';
import SectionsComponent from '../sections-component/sections-component';
import styles from './portfolio-page.module.css';
import { mockUserState } from '../mockUser';
import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* eslint-disable-next-line */
export interface PortfolioPageProps {}
const editMode = false;

export function PortfolioPage(props: PortfolioPageProps) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>('#WorkHistory')
        .forEach((element: any) => {
          gsap.registerPlugin(ScrollTrigger);
          gsap.to(element, {
            scrollTrigger: {
              trigger: element,
              start: 'top center',
              toggleActions: 'play none none none',
            },
            duration: 2,
            autoAlpha: 1,
          });
        });
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
