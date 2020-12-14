import React, {FC, useEffect, useRef, useState} from 'react';

import {Body, Heading} from '../../../../../Components/Typography';

import {TextVariants} from '../../../../../Components/Typography/types';

import plan from '../../../../../assets/des1.jpg';

import support from '../../../../../assets/des2.jpg';

import idea from '../../../../../assets/des3.jpg';

import styles from './description.module.css';

import clsx from 'clsx';

interface Props {}

const Description: FC<Props> = (props) => {
  const [item, setItem] = useState(false);

  const [item2, setItem2] = useState(false);

  const [item3, setItem3] = useState(false);

  const text = useRef<HTMLDivElement>(null);

  const text2 = useRef<HTMLDivElement>(null);

  const text3 = useRef<HTMLDivElement>(null);

  const windowHeight = window.innerHeight;

  useEffect(() => {
    window.addEventListener('scroll', handleScrollShow);
    return () => {
      window.removeEventListener('scroll', handleScrollShow);
    };
    // eslint-disable-next-line
  }, []);

  const handleScrollShow = (e: any) => {
    if (text.current && !text.current.contains(e.target)) {
      let scrollItem = text.current.getBoundingClientRect().top;

      if (scrollItem < windowHeight / 1.5) {
        setItem(true);
      }
    }

    if (text2.current && !text2.current.contains(e.target)) {
      let scrollItem2 = text2.current.getBoundingClientRect().top;

      if (scrollItem2 < windowHeight / 1.5) {
        setItem2(true);
      }
    }

    if (text3.current && !text3.current.contains(e.target)) {
      let scrollItem3 = text3.current.getBoundingClientRect().top;

      if (scrollItem3 < windowHeight / 1.5) {
        setItem3(true);
      }
    }
  };

  return (
    <div className={styles.wrap}>
      <div ref={text} className={clsx(styles.item, item && styles.show)}>
        <img className={styles.img} alt="plan" src={plan} />
        <div className={styles.text}>
          <Heading className={styles.head} variant={TextVariants.S}>
            Better organization to get focused
          </Heading>
          <Body className={styles.body}>
            <strong>Keep your team on the rails.</strong> Tracker's shared
            backlog makes priorities clear so the team can stay organized.
            Easily visualize scope, focus your teamwork, and stay nimble when
            circumstances change.
          </Body>
        </div>
      </div>
      <div ref={text2} className={clsx(styles.item, item2 && styles.show)}>
        <img className={styles.img} alt="plan" src={support} />
        <div className={styles.text}>
          <Heading className={styles.head2} variant={TextVariants.S}>
            Tools to help you adapt and evolve
          </Heading>
          <Body className={styles.body}>
            <strong>Get more work done, more often.</strong> Tracker's guided
            iteration planning helps you break down and prioritize projects into
            manageable chunks so the team can keep the momentum toward
            delivering.
          </Body>
        </div>
      </div>
      <div ref={text3} className={clsx(styles.item, item3 && styles.show)}>
        <img className={styles.img} alt="plan" src={idea} />
        <div className={styles.text}>
          <Heading className={styles.head3} variant={TextVariants.S}>
            Team transparency at a glance
          </Heading>
          <Body className={styles.body}>
            <strong>No more surprises.</strong> With a shared, clear view of
            your team's work, everyone has a real-time, single source of truth.
            A quick scan explains your team's status, who's responsible for
            what, and what's coming next.
          </Body>
        </div>
      </div>
    </div>
  );
};

export default Description;
