import { Button, TextField } from '@mui/material';
import styles from './chat.module.css';
import { IoIosSend } from 'react-icons/io';
import { MessageLeft, MessageRight } from '../message/message';
import { useContext, useEffect, useState } from 'react';
import uniqid from 'uniqid';
import moment from 'moment';
import { UserContext } from '../../utils/UserContext';
import { Messages } from '@topfolio/api-interfaces';
import { callMyAI } from '../../utils/callMyAI';
/* eslint-disable-next-line */
export interface ChatProps {
  closeModal: any;
}

export function Chat(props: ChatProps) {
  const { userDetails } = useContext(UserContext);
  const [messages, setMessages] = useState<Messages[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const scrollToElement = document.getElementById('scroll-to') as HTMLElement;
    const store = localStorage.getItem(`store${userDetails.slug_url}`);
    if (!store || store.length <= 2) {
      callMyAI(
        userDetails,
        '\n\nInterviewer:' + 'Hello' + '\n\nAI Assistant:\n\n'
      )
        .then((res: string) => {
          setMessages([
            {
              text: res,
              bot: true,
              id: uniqid(),
              date: moment(Date.now()).format('h:mm'),
            },
          ]);
        })
        .catch((e) => console.log(e));
    } else {
      const value = JSON.parse(store);
      setMessages([...value]);
    }
    scrollToElement.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const scrollToElement = document.getElementById('scroll-to') as HTMLElement;
    localStorage.setItem(
      `store${userDetails.slug_url}`,
      JSON.stringify(messages)
    );
    scrollToElement.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const mapMessagesForApi = (messages: Messages[]): string => {
    const mappedMsgs = messages.map((message) => {
      if (message.bot) return '\n\nAI Assistant:' + message.text;
      return '\n\nInterviewer:' + message.text + '\n\nAI Assistant:';
    });
    return mappedMsgs.join('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      message: { value: string };
    };
    if (target.message.value === '') return;
    const currentMsg = {
      text: target.message.value,
      bot: false,
      id: uniqid(),
      date: moment(Date.now()).format('h:mm'),
    };
    target.message.value = '';

    setMessages([...messages, currentMsg]);
    setLoading(true);
    const response = await callMyAI(
      userDetails,
      mapMessagesForApi([...messages, currentMsg])
    );

    if (response !== '') {
      const updatedMessages = [
        ...messages,
        currentMsg,
        {
          text: response,
          bot: true,
          id: uniqid(),
          date: moment(Date.now()).format('h:mm'),
        },
      ];
      setLoading(false);
      setMessages([...updatedMessages]);
    }
    return;
  };
  return (
    <div className={styles['container']}>
      <div className={styles['messages-container']}>
        {messages.map((message) =>
          message.bot ? (
            <MessageLeft
              text={message.text}
              timeStamp={message.date}
              key={message.id}
            />
          ) : (
            <MessageRight
              text={message.text}
              timeStamp={message.date}
              key={message.id}
            />
          )
        )}
        {loading && <MessageLeft text={'Typing...'} timeStamp={''} />}
        <div id="scroll-to"></div>
      </div>
      <div style={{ height: '10%' }}>
        <form
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          className={styles['input']}
        >
          <TextField
            id="standard-text"
            placeholder="Ask me a question..."
            sx={{ width: '100%' }}
            name="message"
          />
          <Button type="submit" color="primary" sx={{ fontSize: '3em' }}>
            <IoIosSend style={{ color: 'var(--secondary)' }} />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Chat;