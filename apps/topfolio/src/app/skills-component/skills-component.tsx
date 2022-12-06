import styles from './skills-component.module.css';
import SkillsSphere from '../skills-sphere/skills-sphere';
import SkillsSlider from '../skills-slider/skills-slider';
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { UserContext } from '../../utils/UserContext';
import MovingTitleComponent from '../moving-title-component/moving-title-component';
import { Skill } from '@topfolio/api-interfaces';

/* eslint-disable-next-line */
export interface SkillsComponentProps {}

export function SkillsComponent(props: SkillsComponentProps) {
  const { userDetails } = useContext(UserContext);
  const [mainSkills, setMainSkills] = useState<Skill[]>();
  const [size, setSize] = useState([0, 0]);

  // RESIZE SKILLS ON WINDOW RESIZE
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
      if (window.innerWidth < 720) {
        setMainSkills([...userDetails.portfolio.skills.slice(0, 3)]);
        return;
      }
      setMainSkills([...userDetails.portfolio.skills.slice(0, 5)]);
      return;
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className={styles['container']}>
      <MovingTitleComponent
        text="Skills & Abilities"
        alignCenter={true}
        html={'h2'}
      />
      <div className={styles['flex']}>
        <div className={styles['skills']}>
          {mainSkills &&
            mainSkills.map((skill, i) => (
              <SkillsSlider skill={skill} key={skill.skill + i + skill.level} />
            ))}
        </div>
        <SkillsSphere skills={userDetails.portfolio.skills} />
      </div>
    </div>
  );
}

export default SkillsComponent;
