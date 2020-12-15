import React, {FC} from 'react';

import {BodySmall, Heading} from '../../../Components/Typography';
import {TextVariants} from '../../../Components/Typography/types';

import styles from './footer.module.css';

interface Props {}

const LandingFooter: FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <Heading variant={TextVariants.XS} className={styles.title}>
        MStory
      </Heading>
      <BodySmall>&#169; 2020 MilkTea, Inc</BodySmall>
    </div>
  );
};

export default LandingFooter;
