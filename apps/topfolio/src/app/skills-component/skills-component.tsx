import styles from './skills-component.module.css';
import SkillsSphere from '../skills-sphere/skills-sphere';
import SkillsSlider from '../skills-slider/skills-slider';
import { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import MovingTitleComponent from '../moving-title-component/moving-title-component';

/* eslint-disable-next-line */
export interface SkillsComponentProps {}

export function SkillsComponent(props: SkillsComponentProps) {
  const { userDetails } = useContext(UserContext);
  const mainSkills = [
    { skill: 'Angular', level: 90 },
    { skill: 'React', level: 70 },
    { skill: 'Sql', level: 20 },
  ];
  return (
    <div className={styles['container']}>
      <MovingTitleComponent
        text="Skills & Abilities"
        alignCenter={true}
        html={'h2'}
      />
      <div className={styles['flex']}>
        <div className={styles['skills']}>
          {mainSkills.map((skill, i) => (
            <SkillsSlider skill={skill} key={skill.skill + i + skill.level} />
          ))}
        </div>
        <SkillsSphere skills={userDetails.portfolio.skills} />
      </div>
    </div>
  );
}

export default SkillsComponent;
