import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import Button from '../../../Components/Button';
import Form from '../../../Components/Form';
import Input from '../../../Components/Input';

import styles from './login.module.css';

interface Props {}

const Login: FC<Props> = (props) => {
  return (
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
        <Button>Sign in</Button>
      </div>
      <div className={styles.support}>
        <Link className={styles.signup} to="register">
          Sign Up instead?
        </Link>
        <Link className={styles.forgot} to="register">
          Forgot password
        </Link>
      </div>
    </Form>
  );
};

export default Login;
