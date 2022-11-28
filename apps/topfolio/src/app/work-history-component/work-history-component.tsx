import { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import styles from './work-history-component.module.css';
import { mockUserState } from '../mockUser';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
/* eslint-disable-next-line */
export interface WorkHistoryComponentProps {}

export function WorkHistoryComponent(props: WorkHistoryComponentProps) {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className={styles['container']}>
      <h3>Work experience</h3>
      <Timeline position="alternate">
        {mockUserState.portfolio.work_history.map((work) => (
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              <Typography variant="h6">{`${work.start_date} - ${work.end_date}`}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
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
                <img src={work.image} alt="logo" />
              </div>
              <Typography variant="h6">
                {`${work.description} at ${work.company_name}`}{' '}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}

{
  //   /
  // <div className={styles['work-history']}>
  //   {mockUserState.portfolio.work_history.map((work) => (
  //   ))}
  // </div>
}
export default WorkHistoryComponent;
