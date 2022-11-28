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
        toggleActions: 'restart pause reverse none',
      },
      x: 1500,
      duration: 3,
    });
  });
};
// VERTICAL SCROLL
// gsap.utils.toArray<HTMLElement>('#project-div').forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: 'top top',
//     pin: true,
//     pinSpacing: false,
//   });
// });
