import React, {FC} from 'react';

import work from '../../../../../assets/working1.svg';

import styles from './intro.module.css';

interface Props {}

const Introduction: FC<Props> = (props) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.img}>
        <img alt="Working" src={work} />
      </div>
      <p className={styles.text}>
        <span className={styles.strong}>MStory</span> is changing how teams
        build software - one story at a time
      </p>
    </div>
  );
};

export default Introduction;
