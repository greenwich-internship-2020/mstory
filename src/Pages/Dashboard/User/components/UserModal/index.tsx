import React, {FC, useEffect, useState} from 'react';

import Button from '../../../../../Components/Button';

import Modal from '../../../../../Components/Modal';

import {Body} from '../../../../../Components/Typography';

import {handleErrorCase} from '../../Validation';

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
      user.password.trim() !== '' &&
      user.confirmPassword.trim() !== ''
    ) {
      setPasswordValid(false);
      setConfirmPasswordValid(false);
      setUserErr({...userErr, confirmPassword: 'Password does not match'});
    }
    if (user.fullname !== '' && modalStatus === 'Edit') {
      setFullnameValid(true);
    }
    if (user.email !== '' && modalStatus === 'Edit') {
      setEmailValid(true);
    }
    // eslint-disable-next-line
  }, [
    user.password,
    user.confirmPassword,
    userErr.password,
    userErr.confirmPassword,
  ]);

  const handleTyping = (e: any) => {
    let {name, value} = e.target;
    setUser({...user, [name]: value});
    handleErrorCase(
      name,
      value,
      user,
      setFullnameValid,
      fullnameValid,
      setUsernameValid,
      usernameValid,
      setPasswordValid,
      passwordValid,
      setConfirmPasswordValid,
      confirmPasswordValid,
      setEmailValid,
      emailValid,
      setUserErr,
      userErr,
    );
  };

  const handleCreate = () => {
    createUser({
      username: user.username.trim(),
      password: user.password.trim(),
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
            username: user.username.trim(),
            fullname: user.fullname,
            email: user.email.trim(),
          }
        : {
            username: user.username.trim(),
            password: user.password.trim(),
            fullname: user.fullname,
            email: user.email.trim(),
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
                status={modalStatus}
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
