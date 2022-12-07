import { Button, TextField } from '@mui/material';
import styles from './chat.module.css';
import { GrSend } from 'react-icons/gr';
import { MessageLeft, MessageRight } from '../message/message';
import { useState } from 'react';
import uniqid from 'uniqid';
import moment from 'moment';

/* eslint-disable-next-line */
export interface ChatProps {}

export function Chat(props: ChatProps) {
  const [messages, setMessages] = useState([
    {
      text: 'Hello there!Please ask me any question and I will be happy to answer ( ͡❛ ͜ʖ ͡❛)',
      bot: true,
      id: uniqid(),
      date: moment(Date.now()).format('h:mm'),
    },
    {
      text: 'Hello there!Please ask me any question and I will be happy to answer ( ͡❛ ͜ʖ ͡❛)',
      bot: true,
      id: uniqid(),
      date: moment(Date.now()).format('h:mm'),
    },
    {
      text: 'Hello there!Please ask me any question and I will be happy to answer ( ͡❛ ͜ʖ ͡❛)',
      bot: true,
      id: uniqid(),
      date: moment(Date.now()).format('h:mm'),
    },
  ]);
  return (
    <div className={styles['container']}>
      <h1>Welcome to Chat!</h1>
      <div className={styles['messages-container']}>
        {messages.map((message) =>
          message.bot ? (
            <MessageLeft text={message.text} timeStamp={message.date} />
          ) : (
            <MessageRight text={message.text} timeStamp={message.date} />
          )
        )}
      </div>
      <div className={styles['input']}></div>
      <form noValidate autoComplete="off">
        <TextField id="standard-text" label="Ask me a question..." />
        <Button variant="contained" color="primary">
          <GrSend />
        </Button>
      </form>
    </div>
  );
}

export default Chat;
