import Timeline from '@mui/lab/Timeline';
import { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import styles from './work-history-component.module.css';

import MovingTitleComponent from '../moving-title-component/moving-title-component';
import { TimelineObject } from '../timeline-item/timeline-item';
/* eslint-disable-next-line */
export interface WorkHistoryComponentProps {
  viewMode: boolean;
}

export function WorkHistoryComponent(props: WorkHistoryComponentProps) {
  const { userDetails } = useContext(UserContext);
  return (
    <div className={styles['work-container']}>
      <MovingTitleComponent
        text={'Work Experience'}
        alignCenter={false}
        html={'h2'}
      />
      <Timeline position="alternate">
        {userDetails.portfolio.work_history.map((work, index) => (
          <TimelineObject
            work={work}
            index={index}
            viewMode={props.viewMode}
            key={`key${index}`}
          />
        ))}
      </Timeline>
    </div>
  );
}
export default WorkHistoryComponent;
