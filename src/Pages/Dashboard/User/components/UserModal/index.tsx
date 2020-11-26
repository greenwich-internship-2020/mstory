import React, {FC, useEffect, useState} from 'react';

import Button from '../../../../../Components/Button';

import Modal from '../../../../../Components/Modal';

import {Body} from '../../../../../Components/Typography';

import Debounce from '../../../../../Helper/debounce';
import {Validate} from '../../../../../Validation';
import ModalForm from './ModalForm';

interface modalProps {
  modalStatus?: any;
  userObj?: any;
  setHide?: any;
  createUser?: any;
  editUser?: any;
  deleteUser?: any;
}

const UserModal: FC<modalProps> = ({
  modalStatus,
  userObj,
  setHide,
  createUser,
  editUser,
  deleteUser,
}) => {
  const [user, setUser] = useState({
    username: '' || userObj.username,
    password: '',
    confirmPassword: '',
    fullname: '' || userObj.fullname,
    email: '' || userObj.email,
  });

  const [userErr, setUserErr] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    fullname: '',
    email: '',
  });

  let [formValid, setFormValid] = useState(false);

  let [edtiValid, setEditValid] = useState(false);

  let [usernameValid, setUsernameValid] = useState(false);

  let [passwordValid, setPasswordValid] = useState(false);

  let [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  let [fullnameValid, setFullnameValid] = useState(false);

  let [emailValid, setEmailValid] = useState(false);

  useEffect(() => {
    setFormValid(
      usernameValid &&
        passwordValid &&
        confirmPasswordValid &&
        fullnameValid &&
        emailValid,
    );
  }, [
    usernameValid,
    passwordValid,
    confirmPasswordValid,
    fullnameValid,
    emailValid,
  ]);

  useEffect(() => {
    setEditValid(fullnameValid && emailValid);
  }, [fullnameValid, emailValid]);

  useEffect(() => {
    if (user.password === user.confirmPassword && user.password !== '') {
      setPasswordValid(true);
      setConfirmPasswordValid(true);
      setUserErr({...userErr, password: '', confirmPassword: ''});
    }
    if (user.password !== user.confirmPassword && user.password !== '') {
      setPasswordValid(false);
      setConfirmPasswordValid(false);
      setUserErr({...userErr, confirmPassword: 'Password does not match'});
    }
    if (user.password === '') {
      setUser({...user, confirmPassword: ''});
      setUserErr({...userErr, confirmPassword: ''});
    }
    if (user.fullname !== '') {
      setFullnameValid(true);
    }
    if (user.email !== '') {
      setEmailValid(true);
    }
    // eslint-disable-next-line
  }, [userErr.password, userErr.confirmPassword]);

  const handleErrorCase = Debounce((name: any, value: any) => {
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
        if (Validate(value, 255) !== '') {
          setPasswordValid(false);
          message = Validate(value, 255);
        }
        setPasswordValid((passwordValid = message ? false : true));
        break;
      case 'confirmPassword':
        if (Validate(value, 255) !== '') {
          setConfirmPasswordValid(false);
          message = Validate(value, 255);
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
  }, 300);

  const handleTyping = (e: any) => {
    let {name, value} = e.target;
    setUser({...user, [name]: value});
    handleErrorCase(name, value);
  };

  const handleCreate = () => {
    createUser({
      username: user.username,
      password: user.password,
      fullname: user.fullname,
      email: user.email,
    });
    setHide();
  };

  const handleEdit = () => {
    const _user =
      user.password === '' ||
      user.password === undefined ||
      user.confirmPassword === '' ||
      user.confirmPassword === undefined
        ? {
            username: user.username,
            fullname: user.fullname,
            email: user.email,
          }
        : {
            username: user.username,
            password: user.password,
            fullname: user.fullname,
            email: user.email,
          };
    editUser(_user, userObj.username);
    setHide();
  };

  const renderModal = () => {
    switch (modalStatus) {
      case 'Create':
        return (
          <Modal
            cancel={setHide}
            head="Create user"
            content={
              <ModalForm
                handleTyping={handleTyping}
                userErr={userErr}
                user={user}
              />
            }
            foot={
              <Button onOK={handleCreate} disabled={!formValid}>
                Create
              </Button>
            }
          />
        );
      case 'Edit':
        return (
          <Modal
            cancel={setHide}
            head="Update user"
            content={
              <ModalForm
                handleTyping={handleTyping}
                userErr={userErr}
                user={user}
              />
            }
            foot={
              <Button disabled={!edtiValid} onOK={handleEdit}>
                Update
              </Button>
            }
          />
        );
      case 'Delete':
        return (
          <Modal
            error
            cancel={setHide}
            content={
              <Body>
                Are you sure you want to delete "
                <strong>{userObj.fullname}</strong>" ?
              </Body>
            }
            head="Delete user"
            foot={
              <Button
                onOK={() => {
                  deleteUser(userObj.username);
                  setHide();
                }}
                error
              >
                Confirm
              </Button>
            }
          />
        );
    }
  };
  return <div>{renderModal()}</div>;
};

export default UserModal;
