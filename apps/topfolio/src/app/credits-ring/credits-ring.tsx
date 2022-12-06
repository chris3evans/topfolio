import { useTheme } from '@emotion/react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect } from 'react';
import { mainTheme } from '../themes';
import styles from './credits-ring.module.css';
import { FcPhoneAndroid, FcInvite, FcBusinessman } from 'react-icons/fc';

/* eslint-disable-next-line */
export interface CreditsRingProps {}

export function CreditsRing(props: CreditsRingProps) {
  const creators = [
    { name: 'Marco', link: 'http://localhost:4200/lupo.marco94-portfolio' },
    { name: 'Noah', link: '' },
    { name: 'Fabrizio', link: '' },
    { name: 'Chenhao', link: '' },
    { name: 'Cristopher', link: '' },
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
      console.log('error');
    }
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
                href={`https://en.wikipedia.org/wiki/${tag}`}
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
