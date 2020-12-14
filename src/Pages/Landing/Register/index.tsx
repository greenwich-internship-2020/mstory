import React, {FC, useEffect, useState} from 'react';

import {Link} from 'react-router-dom';

import Button from '../../../Components/Button';

import Form from '../../../Components/Form';

import Input from '../../../Components/Input';

import {BodySmall} from '../../../Components/Typography';

import Debounce from '../../../Helper/debounce';

// import space from '../../../assets/astronaut.svg';

import styles from './register.module.css';

import {
  emailValid,
  fullnameValid,
  passwordValid,
  usernameValid,
} from './validate';

interface Props {}

const Register: FC<Props> = (props) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    fullname: '',
    email: '',
  });

  const [userErr, setUserErr] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    fullname: '',
    email: '',
  });

  let [formValid, setFormValid] = useState(false);

  let [_usernameValid, setUsernameValid] = useState(false);

  let [_passwordValid, setPasswordValid] = useState(false);

  let [_confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  let [_fullnameValid, setFullnameValid] = useState(false);

  let [_emailValid, setEmailValid] = useState(false);

  useEffect(() => {
    setFormValid(
      _usernameValid &&
        _passwordValid &&
        _confirmPasswordValid &&
        _fullnameValid &&
        _emailValid,
    );
  }, [
    _usernameValid,
    _passwordValid,
    _confirmPasswordValid,
    _fullnameValid,
    _emailValid,
  ]);

  useEffect(() => {
    if (
      user.password.trim() === user.confirmPassword.trim() &&
      user.password.trim() !== '' &&
      user.confirmPassword.trim() !== '' &&
      user.confirmPassword.trim().length > 5 &&
      user.password.trim().length > 5
    ) {
      setPasswordValid(true);
      setConfirmPasswordValid(true);
      setUserErr({...userErr, password: '', confirmPassword: ''});
    }
    if (
      user.password.trim() !== user.confirmPassword.trim() &&
      user.password !== '' &&
      user.confirmPassword !== ''
    ) {
      setConfirmPasswordValid(false);
      setPasswordValid(false);
      setUserErr({...userErr, confirmPassword: 'Password does not match'});
    }
  }, [user.password, user.confirmPassword, userErr]);

  const handleError = Debounce((name: string, value: string) => {
    let message = '';
    switch (name) {
      case 'fullname':
        if (fullnameValid(value, 50) !== '') {
          setFullnameValid(false);
          message = fullnameValid(value, 50);
        }
        setFullnameValid((_fullnameValid = message ? false : true));
        break;
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
      case 'confirmPassword':
        if (passwordValid(value.trim(), 255) !== '') {
          setConfirmPasswordValid(false);
          message = passwordValid(value.trim(), 255);
        }
        setConfirmPasswordValid(
          (_confirmPasswordValid = message ? false : true),
        );
        break;
      case 'email':
        if (emailValid(value, 64) !== '') {
          setEmailValid(false);
          message = emailValid(value, 64);
        }
        setEmailValid((_emailValid = message ? false : true));
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
      {/* <div className={styles.img}>
        <img alt="Guard" src={space} />
      </div> */}
      <Form head="Sign up">
        <div className={styles.content}>
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
          <div className={styles.email}>
            <Input
              name="email"
              onChange={handleTyping}
              errorNoti={userErr.email}
              type="email"
              label="Email"
              placeholder="Type email"
            />
          </div>
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
        <div className={styles.eventHandle}>
          <Button disabled={!formValid} className={styles.button}>
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

export default Register;
