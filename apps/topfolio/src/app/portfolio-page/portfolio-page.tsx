import Footer from '../footer/footer';
import HeroComponent from '../hero-component/hero-component';
import SectionsComponent from '../sections-component/sections-component';
import styles from './portfolio-page.module.css';
import { gsap } from 'gsap';
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { workHistoryAnimation, pageScrollAnimation } from './animations';
import { ThemeProvider } from '@emotion/react';
import { themeGenerator, workExperienceFormTheme } from '../themes';
import { getUser } from '../../utils/ApiService';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../utils/UserContext';

export interface PortfolioPageProps {
  viewMode: boolean;
}

export function PortfolioPage(props: PortfolioPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const { setUser } = useContext(UserContext);
  const [theme, setTheme] = useState(workExperienceFormTheme);

  const serverCall = async () => {
    const res: any = await getUser(slug);
    return res;
  };

  useEffect(() => {
    serverCall()
      .then((res) => {
        setTheme(themeGenerator(res.data.portfolio.theme));
        setUser({ ...res.data });
      })
      .catch((e) => console.error(e));
  }, []);

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
        <HeroComponent />
        <SectionsComponent viewMode={props.viewMode} />
        <Footer viewMode={props.viewMode} />
      </div>
    </ThemeProvider>
  );
}
