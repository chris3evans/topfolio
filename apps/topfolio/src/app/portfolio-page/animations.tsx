import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { gsap } from 'gsap';

export const workHistoryAnimation = (id: string) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray<HTMLElement>(id).forEach((element: any) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        toggleActions: 'play none none none',
      },
      duration: 1.5,
      autoAlpha: 1,
    });
  });
};
export const projectsAnimation = (id: string) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray<HTMLElement>(id).forEach((element: any) => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        toggleActions: 'play none none none',
      },
      xPercent: 80,
      duration: 2,
    });
  });
};
export const pageScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sections = gsap.utils.toArray('#project-div');
  let maxWidth = 0;

  const getMaxWidth = () => {
    maxWidth = 0;
    sections.forEach((section: any) => {
      maxWidth += section.offsetWidth;
    });
  };
  getMaxWidth();
  ScrollTrigger.addEventListener('refreshInit', getMaxWidth);

  gsap.to(sections, {
    x: () => `-${maxWidth - window.innerWidth}`,
    ease: 'none',
    scrollTrigger: {
      trigger: '#projects-cont',
      pin: true,
      scrub: true,
      snap: {
        snapTo: 1 / (sections.length - 1),
        inertia: true,
        duration: { min: 2, max: 2 },
      },
      end: () => `+=${maxWidth / 3}`,
      invalidateOnRefresh: true,
    },
  });
};
