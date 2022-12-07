import styles from './chat-dialog.module.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import { CgCloseO } from 'react-icons/cg';
import Chat from '../chat/chat';
/* eslint-disable-next-line */
export interface ChatDialogProps {
  open: boolean;
  closeModal: any;
}

export function ChatDialog(props: ChatDialogProps) {
  const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      name: { value: string };
      subject: { value: string };
      message: { value: string };
    };
    const data = {
      name: target.name?.value,
      email: target.email?.value,
      title: target.subject?.value,
      body: target.message?.value,
    };
  };
  return (
    <Dialog open={props.open}>
      <Chat />
      <Button
        sx={{
          position: 'absolute',
          color: 'red',
          height: '50px',
          fontSize: '3em',
          right: '0',
        }}
        onClick={props.closeModal}
        data-testid="close-button"
      >
        <CgCloseO />
      </Button>{' '}
    </Dialog>
  );
}

export default ChatDialog;
