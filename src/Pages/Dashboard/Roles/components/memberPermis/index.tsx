import React, {FC} from 'react';

import Checkbox from '../../../../../Components/Checkbox';

import styles from '../dashboard.module.css';

interface Props {
  addValue?: any;
}

const MemberPermis: FC<Props> = ({addValue}) => {
  const handleChange = (e: any) => {
    const {value} = e.target;
    addValue(value);
  };

  return (
    <div className={styles.memberPermis}>
      <Checkbox
        onChange={handleChange}
        className={styles.checkbox}
        value="VIEW_MEMBERS"
        note="View list of members"
      />
      <Checkbox
        onChange={handleChange}
        className={styles.checkbox}
        value="INVITE_MEMBER"
        note="Invite member"
      />
      <Checkbox
        onChange={handleChange}
        className={styles.checkbox}
        value="UPDATE_MEMBER_ROLES"
        note="Update member roles"
      />
      <Checkbox
        onChange={handleChange}
        className={styles.checkbox}
        value="DELETE_MEMBER"
        note="Delete member"
      />
    </div>
  );
};

export default MemberPermis;
