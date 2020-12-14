import React, {FC} from 'react';

// import guard from '../../../assets/security.svg';

import {Link} from 'react-router-dom';

import Button from '../../../Components/Button';

import Form from '../../../Components/Form';

import Input from '../../../Components/Input';

import styles from './login.module.css';

interface Props {}

const Login: FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.img}>
        <img alt="Guard" src={guard} />
      </div> */}
      <Form head="Sign in">
        <div className={styles.content}>
          <div className={styles.username}>
            <Input label="Username" placeholder="Type username" />
          </div>
          <div className={styles.password}>
            <Input label="Password" placeholder="Type password" />
          </div>
        </div>
        <div className={styles.eventHandle}>
          <Link to="/projects">
            <Button className={styles.login}>Sign in</Button>
          </Link>
        </div>
        <div className={styles.support}>
          <Link className={styles.signup} to="/register">
            Sign Up instead?
          </Link>
          <Link className={styles.forgot} to="/forgot-password">
            Forgot password
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
