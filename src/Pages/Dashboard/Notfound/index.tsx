import React, {FC} from 'react';

import {Body, Heading} from '../../../Components/Typography';

import notfound from '../../../assets/notfound.png';

import {TextVariants} from '../../../Components/Typography/types';

import styles from './notfound.module.css';
import {Link, RouteComponentProps} from 'react-router-dom';
import Button from '../../../Components/Button';

interface NotfoundProps extends RouteComponentProps<any> {}

const Notfound: FC<NotfoundProps> = ({history}) => {
  localStorage.removeItem('project');

  return (
    <div className={styles.container}>
      <div className={styles.notfound}>
        <img className={styles.image} src={notfound} alt="not found" />
        <div className={styles.noti}>
          <div className={styles.status}>
            <Heading variant={TextVariants.L}>Sorry! Page not found</Heading>
          </div>
          <div className={styles.content}>
            <Body>The page you are looking for could not be found</Body>
          </div>
          <div className={styles.moveButton}>
            <div
              className={styles.back}
              onClick={() => {
                history.goBack();
              }}
            >
              <Button className={styles.backBtn} ghost>
                Back
              </Button>
            </div>
            <Link to="/mstory">
              <Button>Go to Homepage</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
