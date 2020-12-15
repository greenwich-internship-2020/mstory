import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import Button from '../../../Components/Button';
import Form from '../../../Components/Form';
import Input from '../../../Components/Input';
import {BodySmall} from '../../../Components/Typography';

import styles from './register.module.css';

interface Props {
  handleTyping?: any;
  userErr?: any;
  formValid?: boolean;
  register?: any;
  load?: boolean;
  error?: string;
}

const RegisterForm: FC<Props> = ({
  handleTyping,
  userErr,
  formValid,
  register,
  error,
  load,
}) => {
  return (
    <div className={styles.wrapper}>
      <Form error={error} head="Sign up">
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.fullname}>
              <Input
                name="fullname"
                onChange={handleTyping}
                label="Fullname"
                errorNoti={userErr.fullname}
                placeholder="Type fullname"
              />
            </div>
            <div className={styles.username}>
              <Input
                name="username"
                onChange={handleTyping}
                errorNoti={userErr.username}
                label="Username"
                placeholder="Type username"
              />
            </div>
          </div>

          <div className={styles.email}>
            <Input
              name="email"
              onChange={handleTyping}
              errorNoti={userErr.email}
              label="Email"
              placeholder="Type email"
            />
          </div>
          <div className={styles.secret}>
            <div className={styles.password}>
              <Input
                name="password"
                onChange={handleTyping}
                errorNoti={userErr.password}
                type="password"
                label="Password"
                placeholder="Type password"
              />
            </div>
            <div className={styles.confirm}>
              <Input
                name="confirmPassword"
                onChange={handleTyping}
                errorNoti={userErr.confirmPassword}
                type="password"
                label="Confirm password"
                placeholder="Type confirm password"
              />
            </div>
          </div>
        </div>
        <div className={styles.eventHandle}>
          <Button
            load={load}
            onOK={register}
            disabled={!formValid}
            className={styles.button}
          >
            Sign up
          </Button>
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

export default RegisterForm;
