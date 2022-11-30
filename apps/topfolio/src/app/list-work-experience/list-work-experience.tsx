import styles from './list-work-experience.module.css';

/* eslint-disable-next-line */
export interface ListWorkExperienceProps {}

export function ListWorkExperience(props: ListWorkExperienceProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ListWorkExperience!</h1>
    </div>
  );
}

export default ListWorkExperience;
