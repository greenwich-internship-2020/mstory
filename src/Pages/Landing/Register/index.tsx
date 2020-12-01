import React, {FC} from 'react';

import {Link} from 'react-router-dom';

import Button from '../../../Components/Button';

import Form from '../../../Components/Form';

import Input from '../../../Components/Input';

import {BodySmall} from '../../../Components/Typography';

import space from '../../../assets/astronaut.svg';

import styles from './register.module.css';

interface Props {}

const Register: FC<Props> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <img alt="Guard" src={space} />
      </div>
      <Form head="Sign up">
        <div className={styles.content}>
          <div className={styles.fullname}>
            <Input label="Fullname" placeholder="Type fullname" />
          </div>
          <div className={styles.username}>
            <Input label="Username" placeholder="Type username" />
          </div>
          <div className={styles.email}>
            <Input type="email" label="Email" placeholder="Type email" />
          </div>
          <div className={styles.password}>
            <Input
              type="password"
              label="Password"
              placeholder="Type password"
            />
          </div>
          <div className={styles.confirm}>
            <Input
              type="password"
              label="Confirm password"
              placeholder="Type confirm password"
            />
          </div>
        </div>
        <div className={styles.eventHandle}>
          <Button>Sign up</Button>
        </div>
        <div className={styles.support}>
          <BodySmall>
            Already have an account?{' '}
            <Link className={styles.signin} to="/login">
              Sign in
            </Link>
          </BodySmall>
        </div>
      </Form>
    </div>
  );
};

export default Register;
