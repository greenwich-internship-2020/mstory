import React, {FC, useEffect, useState} from 'react';

import Debounce from '../../../Helper/debounce';

import RegisterForm from './form';

import {
  emailValid,
  fullnameValid,
  passwordValid,
  usernameValid,
} from './validate';

interface Props {
  register?: any;
  load?: boolean;
  error?: string;
}

const RegisterIndex: FC<Props> = ({register, load, error}) => {
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
    // eslint-disable-next-line
  }, [
    user.password,
    user.confirmPassword,
    userErr.password,
    userErr.confirmPassword,
  ]);

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
    <RegisterForm
      load={load}
      error={error}
      register={() => register(user)}
      handleTyping={handleTyping}
      userErr={userErr}
      formValid={formValid}
    />
  );
};

export default RegisterIndex;
