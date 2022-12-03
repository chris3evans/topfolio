import { PortfolioPage } from '../portfolio-page/portfolio-page';
import styles from './form-layout.module.css';
import { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import Button from '@mui/material/Button';
import { updateUser } from '../../utils/ApiService';

/* eslint-disable-next-line */
export interface FormLayoutProps {
  token: string;
}

export function FormLayout(props: FormLayoutProps) {
  const { userDetails, setUser } = useContext(UserContext);
  const saveLayout = async () => {
    if (userDetails) {
      const response = await updateUser(userDetails, props.token);
      console.log('API RESPONSE:', response);
    }
  };

  return (
    <div>
      <h1>Layout Preview</h1>
      <div className={styles['layoutPreview']}>
        Drag & Drop the sections of your portfolio to change the order. Click
        "Save Layout" to keep the changes.{' '}
        <Button onClick={saveLayout} variant="contained">
          Save Layout
        </Button>
      </div>
      <PortfolioPage viewMode={false} {...props} />
    </div>
  );
}

export default FormLayout;
