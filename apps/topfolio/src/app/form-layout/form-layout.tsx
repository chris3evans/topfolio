import PortfolioPage from '../portfolio-page/portfolio-page';
import styles from './form-layout.module.css';

/* eslint-disable-next-line */
export interface FormLayoutProps { }

export function FormLayout(props: FormLayoutProps) {
  return (
    <div>
      <h1>Welcome to FormLayout!</h1>
      <PortfolioPage viewMode={false} {...props} />
    </div>
  );
}

export default FormLayout;
