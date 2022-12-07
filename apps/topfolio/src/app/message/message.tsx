import { Avatar } from '@mui/material';
import styles from './message.module.css';
/* eslint-disable-next-line */
export interface MessageProps {
  text: string;
  timeStamp: string;
}

export const MessageLeft = (props: MessageProps) => {
  return (
    <div className={styles['message-left']}>
      <Avatar
        src={'../../assets/bot.png'}
        alt={'name'}
        sx={{
          color: 'var(--secondary)',
          fontSize: '2em',
          backgroundColor: 'var(--secondary)',
        }}
      ></Avatar>
      <div>
        <div className={styles['messageBot']}>
          <div>
            <p>{props.text}</p>
          </div>
          <div className={styles['timestamp']}>{props.timeStamp}</div>
        </div>
      </div>{' '}
    </div>
  );
};
export const MessageRight = (props: MessageProps) => {
  return (
    <div className={styles['message-right']}>
      <div>
        <div className={styles['messageVisitor']}>
          <div>
            <p>{props.text}</p>
          </div>
          <div className={styles['timestamp']}>{props.timeStamp}</div>
        </div>
      </div>{' '}
    </div>
  );
};
