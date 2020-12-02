import React, {FC} from 'react';
import {Body, Heading} from '../../../../../Components/Typography';
import {TextVariants} from '../../../../../Components/Typography/types';

import styles from './prove.module.css';

interface Props {}

const Proven: FC<Props> = (props) => {
  return (
    <div className={styles.wrap}>
      <Heading className={styles.text} variant={TextVariants.S}>
        Proven project management for successful teams
      </Heading>
      <Body className={styles.text}>
        With a shared view of team priorities, a process that fosters
        collaboration, and dynamic tools to analyze progress, your team will
        deliver more frequently and consistently.
      </Body>
    </div>
  );
};

export default Proven;
