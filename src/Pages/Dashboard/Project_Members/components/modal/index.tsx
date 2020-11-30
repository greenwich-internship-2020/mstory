import React, {FC, useState} from 'react';
import Button from '../../../../../Components/Button';
import Dropdown from '../../../../../Components/Dropdown';
import Input from '../../../../../Components/Input';
import Modal from '../../../../../Components/Modal';
import Debounce from '../../../../../Helper/debounce';
import {Validate} from '../../../../../Validation';

import styles from './modal.module.css';

interface Props {
  hide?: any;
}

const MemberModal: FC<Props> = ({hide}) => {
  const [member, setMember] = useState({
    email: '',
    role: 'guest',
  });

  const [emailErr, setEmailErr] = useState({
    email: '',
  });

  let [valid, setValid] = useState(false);

  const handleTyping = Debounce((e: any) => {
    const {name, value} = e.target;
    let msg;
    setMember({...member, [name]: value.trim()});
    if (Validate(member.email, 64) !== '') {
      setValid(false);
      msg = Validate(member.email, 64);
    }
    setEmailErr({...emailErr, [name]: msg});
    setValid((valid = msg ? false : true));
  }, 200);

  return (
    <Modal
      cancel={() => hide()}
      head="Invite member"
      foot={<Button disabled={!valid}>Invite</Button>}
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
