import React, {FC} from 'react';
import Button from '../../../../../Components/Button';
import {Heading} from '../../../../../Components/Typography';
import {TextVariants} from '../../../../../Components/Typography/types';

import laptop from '../../../../../assets/laptop.svg';

import styles from './getstart.module.css';
import {Link} from 'react-router-dom';

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
        <Link to="/register" className={styles.start}>
          <Button>Get Started</Button>
        </Link>
      </div>
      <img className={styles.laptop} alt="robot" src={laptop} />
    </div>
  );
};

export default Getstarted;
