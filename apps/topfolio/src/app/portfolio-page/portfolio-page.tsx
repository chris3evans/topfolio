import Footer from '../footer/footer';
import HeroComponent from '../hero-component/hero-component';
import SectionsComponent from '../sections-component/sections-component';
import styles from './portfolio-page.module.css';
import { gsap } from 'gsap';
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { pageScrollAnimation } from './animations';
import { ThemeProvider } from '@emotion/react';
import { themeGenerator, mainTheme } from '../themes';
import { getUser } from '../../utils/ApiService';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../utils/UserContext';
import { ErrorPage } from '../error-page/error-page'
export interface PortfolioPageProps {
  viewMode: boolean;
}

export function PortfolioPage(props: PortfolioPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const { setUser } = useContext(UserContext);
  const [theme] = useState(mainTheme);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const serverCall = async () => {
    const res: any = await getUser(slug);
    if (res.error == "User Not found") {
      setError(true)
    } else {
      setError(false);
    }
    return res;
  };

  useEffect(() => {
    serverCall()
      .then((res) => {
        themeGenerator(res.data.portfolio.theme);
        setUser({ ...res.data });
        setLoading(true);
      })
      .catch((e) => console.error(e));
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      if (props.viewMode && loading && window.innerWidth > 600) {
        const ctx = gsap.context(() => {
          pageScrollAnimation();
        });
        return () => ctx.revert(); // cleanup
      }
      return;
    }, 1000);
  });
  return (
<ThemeProvider theme={theme}>
       {
        error === true ? (<ErrorPage />) : (
          loading && (
        <div className={styles['body']}>
          <HeroComponent />
          <SectionsComponent viewMode={props.viewMode} />
          <Footer viewMode={props.viewMode} />
        </div>
      )
        )
      }
    </ThemeProvider>
  );
}
