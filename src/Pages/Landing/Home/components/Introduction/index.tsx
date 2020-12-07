import React, {FC, useEffect, useRef} from 'react';

import carousel from '../../../../../assets/carousel.jpg';

import styles from './intro.module.css';

interface Props {}

const Introduction: FC<Props> = (props) => {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = (e: any) => {
    let scrollPos = window.pageYOffset;
    if (ref.current && !ref.current.contains(e.target)) {
      ref.current.style.transform = `translateY(${scrollPos * 0.4}px)`;
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.bgWrap}>
        <img ref={ref} alt="carousel" src={carousel} className={styles.img} />
        <div className={styles.carousel}></div>
      </div>
      <div className={styles.textWrap}>
        <p className={styles.text}>
          <span className={styles.strong}>MStory</span> is changing how teams
          build software - one story at a time
        </p>
      </div>
    </div>
  );
};

export default Introduction;
