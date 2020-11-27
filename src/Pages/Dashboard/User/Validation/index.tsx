import Debounce from '../../../../Helper/debounce';
import {Validate} from '../../../../Validation';

export const handleErrorCase = Debounce(
  (
    name: any,
    value: any,
    user: any,
    setFullnameValid: any,
    fullnameValid: any,
    setUsernameValid: any,
    usernameValid: any,
    setPasswordValid: any,
    passwordValid: any,
    setConfirmPasswordValid: any,
    confirmPasswordValid: any,
    setEmailValid: any,
    emailValid: any,
    setUserErr: any,
    userErr: any,
  ) => {
    let message = '';
    switch (name) {
      case 'fullname':
        if (Validate(value, 50) !== '') {
          setFullnameValid(false);
          message = Validate(value, 50);
        } else if (!value.match(/^[a-zA-Z\s]*$/)) {
          setFullnameValid(false);
          message = 'The field should contain letters and spaces only';
        } else if (value.match(/\s{2}/)) {
          setFullnameValid(false);
          message = 'The field should not have consecutive spaces';
        }
        setFullnameValid((fullnameValid = message ? false : true));
        break;
      case 'username':
        if (Validate(value, 39) !== '') {
          setUsernameValid(false);
          message = Validate(value, 39);
        } else if (!value.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/)) {
          setUsernameValid(false);
          message =
            'Username just accept hyphen between, start with lowercase and must have less than 39 characters';
        }
        setUsernameValid((usernameValid = message ? false : true));
        break;
      case 'password':
        if (Validate(value.trim(), 255) !== '') {
          setPasswordValid(false);
          message = Validate(value.trim(), 255);
        }
        setPasswordValid((passwordValid = message ? false : true));
        break;
      case 'confirmPassword':
        if (Validate(value.trim(), 255) !== '') {
          setConfirmPasswordValid(false);
          message = Validate(value.trim(), 255);
        } else if (user.password !== value && user.confirmPassword !== '') {
          setConfirmPasswordValid(false);
          message = 'Password confirm does not match';
        }
        setConfirmPasswordValid(
          (confirmPasswordValid = message ? false : true),
        );
        break;
      case 'email':
        // eslint-disable-next-line
        const emailRegex = /^(([^<>()\[\]\\.,;:\s-@#$!%^&*+=_/`?{}|'"]+(\.[^<>()\[\]\\.,;:\s-@_!#$%^&*()=+/`?{}|'"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

        if (Validate(value, 64) !== '') {
          setEmailValid(false);
          message = Validate(value, 64);
        } else if (!value.match(emailRegex)) {
          setEmailValid(false);
          message = 'Invalid type of email';
        }
        setEmailValid((emailValid = message ? false : true));
        break;
      default:
        message = 'Invalid';
        break;
    }
    setUserErr({...userErr, [name]: message});
  },
  300,
);
