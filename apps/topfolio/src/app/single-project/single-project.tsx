import { MyProjects } from '@topfolio/api-interfaces';
import styles from './single-project.module.css';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub } from 'react-icons/fi';
import { FaAppStore } from 'react-icons/fa';

/* eslint-disable-next-line */
export interface SingleProjectProps {
  project: MyProjects;
}
export function SingleProject(props: SingleProjectProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className={styles['projects-cont']} id="project-div">
      <motion.div
        className={styles['laptop-bg']}
        animate={
          isInView
            ? {
                scale: 1,
                transition: {
                  type: 'tween',
                  delay: 1.5,
                  duration: 1,
                },
              }
            : { scale: 0.8, transition: { delay: 0.5 } }
        }
      >
        <motion.div
          className={styles['laptop-content-bg']}
          style={{ backgroundImage: `url(${props.project.images[0]})` }}
        ></motion.div>
        <motion.img src="../../assets/laptop.png" alt="laptopFrame" />
        <motion.div
          className={styles['infos']}
          ref={ref}
          animate={
            isInView
              ? {
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    delay: 1.5,
                    duration: 1,
                  },
                }
              : { opacity: 0, transition: { delay: 0.5 } }
          }
        >
          <p>{props.project.description}</p>
          <div className={styles['links']}>
            <a href={props.project.github_url}>
              <FiGithub />
              Github
            </a>
            <a href={props.project.app_url}>
              <FaAppStore />
              App
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SingleProject;