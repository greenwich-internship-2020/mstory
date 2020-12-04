import React, {FC, useState} from 'react';
import {useParams} from 'react-router-dom';
import Button from '../../../../../Components/Button';
import Dropdown from '../../../../../Components/Dropdown';
import Input from '../../../../../Components/Input';
import Modal from '../../../../../Components/Modal';
import Debounce from '../../../../../Helper/debounce';
import {Validate} from '../../../../../Validation';

import styles from './modal.module.css';

interface Props {
  hide?: any;
  invite?: any;
}

interface ParamTypes {
  id?: string;
}

const MemberModal: FC<Props> = ({invite, hide}) => {
  const [memberEmail, setMemberEmail] = useState('');

  const [memberRole, setMemberRole] = useState('guest');

  const {id} = useParams<ParamTypes>();

  const [emailErr, setEmailErr] = useState({
    email: '',
  });

  let [valid, setValid] = useState(false);

  const handleEmail = (name: string, value: string) => {
    let msg;
    // eslint-disable-next-line
    const emailRegex = /^(([^<>()\[\]\\.,;:\s-@#$!%^&*+=_/`?{}|'"]+(\.[^<>()\[\]\\.,;:\s-@_!#$%^&*()=+/`?{}|'"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

    if (Validate(value, 64) !== '') {
      setValid(false);
      msg = Validate(value.trim(), 64);
    } else if (!value.match(emailRegex)) {
      setValid(false);
      msg = 'Invalid type of email';
    }
    setEmailErr({...emailErr, [name]: msg});
    setValid((valid = msg ? false : true));
  };

  const handleTyping = Debounce((e: any) => {
    const {name, value} = e.target;
    setMemberEmail(value.trim());
    handleEmail(name, value);
  }, 200);

  const handleSubmit = () => {
    invite(id, {invited_email: memberEmail, role: memberRole});
    hide();
  };

  return (
    <Modal
      cancel={() => hide()}
      head="Invite member"
      foot={
        <Button onOK={handleSubmit} disabled={!valid}>
          Invite
        </Button>
      }
      content={
        <div>
          <div className={styles.info}>
            <Input
              errorNoti={emailErr.email}
              name="email"
              onChange={handleTyping}
              label="MStory Email address"
              placeholder="Type email"
            />
          </div>
          <div className={styles.inviteRole}>
            <Dropdown
              edit
              setRole={setMemberRole}
              label="Choose a role"
              options={[
                {name: 'Guest', value: {memRole: 'guest'}},
                {name: 'Owner', value: {memRole: 'owner'}},
                {name: 'Reporter', value: {memRole: 'reporter'}},
                {name: 'Developer', value: {memRole: 'developer'}},
                {name: 'Maintainer', value: {memRole: 'maintainer'}},
              ]}
            />
          </div>
        </div>
      }
    />
  );
};

export default MemberModal;
