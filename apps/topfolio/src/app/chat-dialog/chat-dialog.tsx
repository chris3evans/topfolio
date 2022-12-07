import styles from './chat-dialog.module.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { CgCloseO } from 'react-icons/cg';
import Chat from '../chat/chat';
/* eslint-disable-next-line */
export interface ChatDialogProps {
  open: boolean;
  closeModal: any;
}

export function ChatDialog(props: ChatDialogProps) {
  return (
    <div style={{ position: 'relative' }}>
      <Dialog open={props.open} sx={{ maxHeight: '60%', top: '20%' }}>
        <Button
          sx={{
            position: 'fixed',
            color: 'red',
            height: '50px',
            fontSize: '3em',
            left: '10em',
          }}
          onClick={props.closeModal}
          data-testid="close-button"
        >
          <CgCloseO />
        </Button>{' '}
        <Chat closeModal={props.closeModal} />
      </Dialog>
    </div>
  );
}

export default ChatDialog;
