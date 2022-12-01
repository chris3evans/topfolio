import Footer from '../footer/footer';
import HeroComponent from '../hero-component/hero-component';
import SectionsComponent from '../sections-component/sections-component';
import styles from './portfolio-page.module.css';
import { mockUserState } from '../mockUser';
import { gsap } from 'gsap';
import { useEffect, useLayoutEffect } from 'react';
import { workHistoryAnimation, pageScrollAnimation } from './animations';
import { ThemeProvider } from '@emotion/react';
import { Theme } from '@mui/material';
import { themeGenerator } from '../themes';
import { getUser } from '../../utils/ApiService';
import { useParams } from 'react-router-dom';

export interface PortfolioPageProps {
  viewMode: boolean;
}

export function PortfolioPage(props: PortfolioPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const theme: Theme = themeGenerator(mockUserState.portfolio.theme);
  useEffect(() => {
    console.log(slug);
    getUser(slug).then((res) => console.log(res));
  });
  useLayoutEffect(() => {
    if (props.viewMode) {
      const ctx = gsap.context(() => {
        workHistoryAnimation('#WorkHistory');
        pageScrollAnimation();
      });
      return () => ctx.revert(); // cleanup
    }
    return;
  });
  return (
    <ThemeProvider theme={theme}>
      <div className={styles['body']}>
        <HeroComponent user={mockUserState} />
        <SectionsComponent user={mockUserState} viewMode={props.viewMode} />
        <Footer
          viewMode={props.viewMode}
          github={mockUserState.portfolio.contact_me.social_media.github}
          facebook={mockUserState.portfolio.contact_me.social_media.facebook}
          linkedin={mockUserState.portfolio.contact_me.social_media.linkedin}
        />
        {/* TODO MAKE THIS WORK WITH REAL USER */}
      </div>
    </ThemeProvider>
  );
}
