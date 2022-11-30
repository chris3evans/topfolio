import styles from './moving-title-component.module.css';
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
/* eslint-disable-next-line */
export interface MovingTitleComponentProps {
  text: string;
}

export function MovingTitleComponent(props: MovingTitleComponentProps) {
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
        duration: 3,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  const wordAnimation = {
    hidden: {},
    visible: {},
  };
  return (
    <div className={styles['text']} aria-label={props.text}>
      <h2>
        {props.text.split(' ').map((word, index) => {
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
                    whileHover={{ scale: 1.3, color: 'var(--primary)' }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      duration: 1,
                      bounce: 1,
                    }}
                  >
                    {character}
                  </motion.span>
                );
              })}
            </motion.span>
          );
        })}
      </h2>
    </div>
  );
}

export default MovingTitleComponent;
