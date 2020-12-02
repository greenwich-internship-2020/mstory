import React, {FC} from 'react';
import Betterway from './components/Betterway';
import Description from './components/Description';
import Getstarted from './components/Getstarted';
import Introduction from './components/Introduction';
import Proven from './components/Proven';

import styles from './home.module.css';

interface Props {}

const Home: FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <Introduction />
      <Proven />
      <Description />
      <Betterway />
      <Getstarted />
    </div>
  );
};

export default Home;
