import React, {FC} from 'react';
import {Body, Heading} from '../../../../../Components/Typography';
import {TextVariants} from '../../../../../Components/Typography/types';

import styles from './better.module.css';

interface Props {}

const Betterway: FC<Props> = (props) => {
  return (
    <div className={styles.wrap}>
      <Heading className={styles.head} variant={TextVariants.S}>
        A better way to develop
      </Heading>
      <Body className={styles.text}>
        Succeeding in an evolving tech landscape requires a time-tested process
        and a tool your team can rely on. Tracker's modern workflow helps your
        team keep the pace and adapt when needs change.
      </Body>
    </div>
  );
};

export default Betterway;
