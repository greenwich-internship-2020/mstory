import React, {FC} from 'react';

import {BodySmall} from '../Typography';

import styles from './footer.module.css';

interface Props {}

const LandingFooter: FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>MStory</p>
      <BodySmall>&#169; 2020 MilkTea, Inc</BodySmall>
    </div>
  );
};

export default LandingFooter;
