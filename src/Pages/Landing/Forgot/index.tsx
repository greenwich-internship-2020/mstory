import React, {FC, useState} from 'react';

import Button from '../../../Components/Button';

import Form from '../../../Components/Form';

import Input from '../../../Components/Input';

import {emailValid} from '../Register/validate';

// import robot from '../../../assets/robot.svg';

import styles from './forgot.module.css';

interface Props {}

const Forgot: FC<Props> = (props) => {
  const [email, setEmail] = useState('');

  const [message, setMessage] = useState('');

  let [valid, setValid] = useState(false);

  const handleType = (e: any) => {
    const {value} = e.target;

    setEmail(value);

    if (emailValid(value, 64) !== '') {
      setValid(false);
      setMessage(emailValid(value, 64));
    } else {
      setValid(true);
      setMessage('');
    }
  };

  return (
    <div className={styles.wrap}>
      {/* <div className={styles.img}>
        <img alt="robot" src={robot} />
      </div> */}
      <Form head="Forgot password">
        <Input
          autoComplete="off"
          errorNoti={message}
          onChange={handleType}
          label="Email"
          type="email"
          placeholder="Type email address"
        />
        <div className={styles.button}>
          <Button disabled={!valid} className={styles.confirm}>
            Confirm
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Forgot;
