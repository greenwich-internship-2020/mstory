import React, {FC} from 'react';

import {Body, Heading} from '../../../../../Components/Typography';

import {TextVariants} from '../../../../../Components/Typography/types';

import plan from '../../../../../assets/plan1.svg';

import support from '../../../../../assets/support.svg';

import idea from '../../../../../assets/idea.svg';

import styles from './description.module.css';

interface Props {}

const Description: FC<Props> = (props) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.item}>
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
        <img className={styles.img} alt="plan" src={plan} />
      </div>
      <div className={styles.item}>
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
        <img className={styles.img} alt="plan" src={support} />
      </div>
      <div className={styles.item}>
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
        <img className={styles.img} alt="plan" src={idea} />
      </div>
    </div>
  );
};

export default Description;
