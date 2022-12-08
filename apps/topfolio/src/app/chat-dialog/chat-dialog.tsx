import styles from './chat-dialog.module.css';
import Dialog from '@mui/material/Dialog';
import { TfiClose } from 'react-icons/tfi';
import Chat from '../chat/chat';
/* eslint-disable-next-line */
export interface ChatDialogProps {
  open: boolean;
  closeModal: any;
}

export function ChatDialog(props: ChatDialogProps) {
  return (
    <Dialog open={props.open} sx={{ maxHeight: '60%', top: '20%' }}>
      <button
        className={styles['button-delete']}
        onClick={props.closeModal}
        data-testid="close-button"
      >
        <TfiClose />
      </button>{' '}
      <Chat closeModal={props.closeModal} />
    </Dialog>
  );
}

export default ChatDialog;
