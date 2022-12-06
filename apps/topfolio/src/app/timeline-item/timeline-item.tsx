import styles from './timeline-item.module.css';
import Typography from '@mui/material/Typography';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import TimelineItem from '@mui/lab/TimelineItem';

/* eslint-disable-next-line */
export interface TimelineItemProps {
  viewMode: boolean;
  work: any;
  index: number;
}

export function TimelineObject(props: TimelineItemProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
    rootMargin: '0px 0px 0px 1000px',
  });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);
  const animation = props.viewMode
    ? {
        hidden: {
          opacity: 0,
          y: '-8em',
        },
        visible: {
          y: '0em',
          opacity: 1,
          transition: {
            delay: 1,
            duration: 2,
            ease: [0.2, 0.65, 0.3, 0.9],
          },
        },
      }
    : { hidden: {}, visible: {} };

  const dotAnimation = props.viewMode
    ? {
        hidden: {
          scale: 0,
        },
        visible: {
          scale: 2,
          color: 'var(--primary)',
          transition: {
            delay: 1.5,
            type: 'spring',
            stiffness: 400,
            duration: 2.5,
            bounce: 1,
            ease: [0.2, 0.65, 0.3, 0.9],
          },
        },
      }
    : { hidden: {}, visible: {} };
  return (
    <motion.div
      className={styles['container']}
      animate={controls}
      variants={animation}
    >
      <TimelineItem key={`key${props.index}`} id="WorkHistory">
        <TimelineOppositeContent
          color="text.secondary"
          className={styles['date']}
        >
          <Typography
            ref={ref}
            variant="h4"
            sx={{
              fontSize: 18,
              fontWeight: 'medium',
              color: 'var(--secondary)',
            }}
          >{`${props.work.start_date} - ${props.work.end_date}`}</Typography>
          <Typography variant="h3"></Typography>
        </TimelineOppositeContent>
        <TimelineSeparator sx={{ height: 400 }}>
          <motion.div animate={controls} variants={dotAnimation}>
            <TimelineDot color="secondary" />
          </motion.div>
          <TimelineConnector
            sx={{
              height: 300,
              width: 5,
              backgroundColor: 'var(--primary)',
            }}
          />
        </TimelineSeparator>
        <TimelineContent>
          <div className={styles['box']}>
            {' '}
            <img src={props.work.image} alt="logo" />
            <Typography variant="h4">{`${props.work.description}`}</Typography>
            <Typography variant="h5">{` ${props.work.company_name}`}</Typography>
          </div>
        </TimelineContent>
      </TimelineItem>
    </motion.div>
  );
}

export default TimelineItem;
