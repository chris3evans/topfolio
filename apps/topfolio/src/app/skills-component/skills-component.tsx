import { useTheme } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../utils/UserContext';
import styles from './skills-component.module.css';
import { useInView } from 'react-intersection-observer';

/* eslint-disable-next-line */
export interface SkillsComponentProps {}

export function SkillsComponent(props: SkillsComponentProps) {
  const theme = useTheme();
  const { userDetails } = useContext(UserContext);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);
  const animation = {
    hidden: {
      opacity: 0,
      y: '10em',
    },
    visible: {
      y: '0em',
      opacity: 1,
      transition: {
        duration: 3,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  useEffect(() => {
    //@ts-ignore
    const TagCanvas = window.TagCanvas;

    try {
      TagCanvas.Start('canvas', 'tags', {
        textColour: theme.palette.primary.main,
        outlineColour: 'transparent',
        reverse: true,
        depth: 0.6,
        maxSpeed: 0.05,
        weight: true,
        noSelect: true,
        textHeight: 35,
        pinchZoom: false,
        wheelZoom: false,
        txtOpt: true,
        centreImage: '../../assets/icons8-sheets-100.png',
      });
    } catch (e) {
      console.log('error');
      // document.getElementById('myCanvasContainer').style.display = 'none';
    }
  }, []);

  return (
    <motion.div
      className={styles['container']}
      animate={controls}
      variants={animation}
      ref={ref}
    >
      <canvas
        id="canvas"
        className={styles['canvas']}
        width="700px"
        height="700px"
      ></canvas>
      <div id="tags" style={{ display: 'none' }}>
        <ul>
          {userDetails.portfolio.skills.map((tag, i) => (
            <li key={tag + i + userDetails._id}>
              <a
                data-weight="25"
                href={`https://en.wikipedia.org/wiki/${tag}`}
                target="_blank"
                rel="noreferrer"
              >
                {tag}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default SkillsComponent;
