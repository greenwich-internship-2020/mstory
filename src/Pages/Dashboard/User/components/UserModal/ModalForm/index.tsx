import React, {FC} from 'react';
import Dropdown from '../../../../../../Components/Dropdown';
import Input from '../../../../../../Components/Input';

import styles from '../usermodal.module.css';

interface FormProps {
  handleTyping?: any;
  userErr?: any;
  user?: any;
  status?: string;
}

const ModalForm: FC<FormProps> = ({handleTyping, userErr, user, status}) => {
  return (
    <div>
      <div className={styles.info}>
        <div className={styles.name}>
          <Input
            name="fullname"
            onChange={handleTyping}
            defaultValue={user.fullname}
            errorNoti={userErr.fullname}
            label="Full name"
            placeholder="Type fullname"
          />
        </div>
        <div className={styles.username}>
          <Input
            name="username"
            defaultValue={user.username}
            disabled={user.username !== '' && status === 'Edit' ? true : false}
            onChange={handleTyping}
            errorNoti={userErr.username}
            label="Username"
            placeholder="Type username"
          />
        </div>
      </div>
      <div className={styles.passwordWrap}>
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
        <div className={styles.confirmPassword}>
          <Input
            name="confirmPassword"
            onChange={handleTyping}
            errorNoti={userErr.confirmPassword}
            type="password"
            label="Confirm password"
            placeholder="Type password"
          />
        </div>
      </div>
      <div className={styles.email}>
        <Input
          name="email"
          defaultValue={user.email}
          onChange={handleTyping}
          errorNoti={userErr.email}
          type="email"
          label="Email"
          placeholder="Type email"
        />
      </div>
      <div className={styles.modalRole}>
        <Dropdown
          label="Roles"
          options={[{name: 'Member'}, {name: 'Admin'}, {name: 'Super Admin'}]}
        />
      </div>
    </div>
  );
};

export default ModalForm;
