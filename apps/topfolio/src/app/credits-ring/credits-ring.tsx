import { useEffect } from 'react';
import styles from './credits-ring.module.css';

/* eslint-disable-next-line */
export interface CreditsRingProps {}

export function CreditsRing(props: CreditsRingProps) {
  const creators = [
    { name: 'Marco', link: '/lupo.marco94-portfolio' },
    { name: 'Noah', link: 'https://github.com/noah-sinnott' },
    { name: 'Fabrizio', link: '/fabrizio-t-portfolio' },
    { name: 'Chenhao', link: 'https://github.com/HuchenhaoArvin' },
    { name: 'Christopher', link: '' },
  ];
  useEffect(() => {
    //@ts-ignore
    const TagCanvas = window.TagCanvas;

    try {
      TagCanvas.Start('canvas', 'tags', {
        shape: 'vring(0.5)',
        offsetY: -60,
        lock: 'y',
        outlineMethod: 'size',
        outlineIncrease: 4,
        textColour: '#39CBD7',
        outlineColour: 'transparent',
        depth: 0.4,
        maxSpeed: 0.1,
        weight: true,
        textHeight: 20,
        wheelZoom: false,
        pinchZoom: false,
      });
    } catch (e) {
      return;
    }
    return;
  }, []);
  return (
    <div className={styles['container']}>
      <canvas
        id="canvas"
        className={styles['canvas']}
        width="350px"
        height="300px"
      ></canvas>
      <div id="tags" style={{ display: 'none' }}>
        <ul>
          {creators.map((tag, i) => (
            <li key={tag.name + i}>
              <a
                data-weight="25"
                href={tag.link}
                target="_blank"
                rel="noreferrer"
              >
                {tag.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CreditsRing;
