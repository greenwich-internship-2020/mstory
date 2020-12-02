import React, {FC} from 'react';
import Button from '../../../../../Components/Button';
import {Heading} from '../../../../../Components/Typography';
import {TextVariants} from '../../../../../Components/Typography/types';

import styles from './getstart.module.css';

interface Props {}

const Getstarted: FC<Props> = (props) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.text}>
          <Heading className={styles.head} variant={TextVariants.S}>
            Ready to get your team on track?
          </Heading>
          <Heading className={styles.head} variant={TextVariants.S}>
            Try us free for 30 days.
          </Heading>
        </div>
        <div className={styles.start}>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Getstarted;
