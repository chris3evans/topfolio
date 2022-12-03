import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import styles from './animated-image.module.css';
/* eslint-disable-next-line */
export interface AnimatedImageProps {
  imageUrl: string;
  alt: string;
}

export function AnimatedImage(props: AnimatedImageProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 1,
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
      x: '10em',
    },
    visible: {
      x: '0em',
      opacity: 1,
      transition: {
        duration: 3,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  return (
    <motion.div animate={controls} variants={animation} ref={ref}>
      <Tilt
        className={styles['tilt']}
        tiltMaxAngleX={40}
        tiltMaxAngleY={40}
        perspective={800}
        transitionSpeed={1500}
        gyroscope={true}
      >
        <div className={styles['box']}>
          <img src={props.imageUrl} alt={props.alt} />
        </div>
      </Tilt>
    </motion.div>
  );
}

export default AnimatedImage;
