import styles from './bio-component.module.css';
import { mockUserState } from '../mockUser';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
/* eslint-disable-next-line */
export interface BioComponentProps {}

export function BioComponent(props: BioComponentProps) {
  const title = mockUserState.name;
  const bio = mockUserState.portfolio.bio;
  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
    if (!inView) {
      animation.start('hidden');
    }
  }, [animation, inView]);

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  const wordAnimation = {
    hidden: {},
    visible: {},
  };
  return (
    <div className={styles['container']} aria-label={title}>
      {/* TODO change to mockuser.bio_title

        {' '}
        <h2>{`Hi, I'm ${mockUserState.name}`}</h2>
        <p>{mockUserState.portfolio.bio}</p>
      */}
      <div className={styles['text']}>
        {bio.split(' ').map((word, index) => {
          return (
            <motion.span
              className={styles['span']}
              ref={ref}
              aria-hidden="true"
              key={index}
              initial="hidden"
              animate={animation}
              variants={wordAnimation}
              transition={{
                delayChildren: index * 0.25,
                staggerChildren: 0.05,
              }}
            >
              {word.split('').map((character, index) => {
                return (
                  <motion.span
                    className={styles['span']}
                    aria-hidden="true"
                    key={index}
                    variants={characterAnimation}
                  >
                    {character}
                  </motion.span>
                );
              })}
            </motion.span>
          );
        })}
      </div>
      <Button
        variant="contained"
        className="animated-button"
        // sx={{ position: 'absolute', left: '20%' }}
      >
        Contact me
      </Button>
    </div>
  );
}

export default BioComponent;
