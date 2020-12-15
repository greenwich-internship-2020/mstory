import React, {FC, useEffect, useState} from 'react';

import {Link} from 'react-router-dom';

import Button from '../../../Components/Button';

import Form from '../../../Components/Form';

import Input from '../../../Components/Input';

import Debounce from '../../../Helper/debounce';

import {passwordValid, usernameValid} from '../Register/validate';

import styles from './login.module.css';

interface Props {
  login?: any;
  defaultUsername?: string;
  load?: boolean;
  error?: string;
}

const LoginIndex: FC<Props> = ({error, load, login, defaultUsername}) => {
  const [user, setUser] = useState({
    username: defaultUsername !== '' ? defaultUsername : '',
    password: '',
  });

  const [userErr, setUserErr] = useState({
    username: '',
    password: '',
  });

  let [formValid, setFormValid] = useState(false);

  let [_usernameValid, setUsernameValid] = useState(false);

  let [_passwordValid, setPasswordValid] = useState(false);

  useEffect(() => {
    setFormValid(_usernameValid && _passwordValid);
  }, [_usernameValid, _passwordValid]);

  useEffect(() => {
    if (user.username !== '' && userErr.username === '') setUsernameValid(true);
  }, [user.username, userErr.username]);

  const handleError = Debounce((name: string, value: string) => {
    let message = '';
    switch (name) {
      case 'fullname':
      case 'username':
        if (usernameValid(value, 39) !== '') {
          setUsernameValid(false);
          message = usernameValid(value, 39);
        }
        setUsernameValid((_usernameValid = message ? false : true));
        break;
      case 'password':
        if (passwordValid(value.trim(), 255) !== '') {
          setPasswordValid(false);
          message = passwordValid(value.trim(), 255);
        }
        setPasswordValid((_passwordValid = message ? false : true));
        break;
      default:
        message = 'Invalid';
        break;
    }
    setUserErr({...userErr, [name]: message});
  }, 300);

  const handleTyping = (e: any) => {
    const {name, value} = e.target;
    setUser({...user, [name]: value});
    handleError(name, value);
  };

  return (
    <div className={styles.wrapper}>
      <Form error={error} head="Sign in">
        <div className={styles.content}>
          <div className={styles.username}>
            <Input
              name="username"
              defaultValue={defaultUsername}
              onChange={handleTyping}
              errorNoti={userErr.username}
              label="Username"
              placeholder="Type username"
            />
          </div>
          <div className={styles.password}>
            <Input
              type="password"
              name="password"
              onChange={handleTyping}
              errorNoti={userErr.password}
              label="Password"
              placeholder="Type password"
            />
          </div>
        </div>
        <div className={styles.eventHandle}>
          <Button
            load={load}
            onOK={() => login(user)}
            disabled={!formValid}
            className={styles.login}
          >
            Sign in
          </Button>
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

export default LoginIndex;
