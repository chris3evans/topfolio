import styles from './skills-sphere.module.css';
import { useTheme } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Skill } from '@topfolio/api-interfaces';
/* eslint-disable-next-line */
export interface SkillsSphereProps {
  skills: Skill[];
}

export function SkillsSphere(props: SkillsSphereProps) {
  const theme = useTheme();
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
        width="600px"
        height="600px"
      ></canvas>
      <div id="tags" style={{ display: 'none' }}>
        <ul>
          {props.skills.map((tag, i) => (
            <li key={tag.skill + i}>
              <a
                data-weight="25"
                href={`https://en.wikipedia.org/wiki/${tag}`}
                target="_blank"
                rel="noreferrer"
              >
                {tag.skill}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default SkillsSphere;