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
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 3,
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
        <TimelineOppositeContent color="text.secondary">
          <Typography
            ref={ref}
            variant="h4"
            sx={{ fontSize: 15, fontWeight: 'medium' }}
          >{`${props.work.start_date} - ${props.work.end_date}`}</Typography>
          <Typography variant="h3"></Typography>
        </TimelineOppositeContent>
        <TimelineSeparator sx={{ height: 500 }}>
          <TimelineDot color="primary" />
          <TimelineConnector
            sx={{
              height: 300,
            }}
          />
        </TimelineSeparator>
        <TimelineContent>
          <div className={styles['box']}>
            {' '}
            <img src={'../../assets/google.png'} alt="logo" />
            <Typography variant="h3">{`${props.work.description}`}</Typography>
            <Typography variant="h4">{` ${props.work.company_name}`}</Typography>
          </div>
        </TimelineContent>
      </TimelineItem>
    </motion.div>
  );
}

export default TimelineItem;
