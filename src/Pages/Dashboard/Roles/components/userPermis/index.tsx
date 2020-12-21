import React, {FC} from 'react';

import Checkbox from '../../../../../Components/Checkbox';

import styles from '../dashboard.module.css';

interface Props {
  addValue?: any;
}

const UserPermis: FC<Props> = ({addValue}) => {
  const handleChange = (e: any) => {
    const {value} = e.target;
    addValue(value);
  };

  return (
    <div className={styles.userPermis}>
      <Checkbox
        onChange={handleChange}
        value="VIEW_USERS"
        className={styles.checkbox}
        note="View list of users"
      />
      <Checkbox
        onChange={handleChange}
        value="VIEW_USERS_DETAILS"
        className={styles.checkbox}
        note="View user detail"
      />
      <Checkbox
        onChange={handleChange}
        value="CREATE_USERS"
        className={styles.checkbox}
        note="Create user"
      />
      <Checkbox
        onChange={handleChange}
        value="UPDATE_USERS"
        className={styles.checkbox}
        note="Update user"
      />
      <Checkbox
        onChange={handleChange}
        value="DELETE_USERS"
        className={styles.checkbox}
        note="Delete user"
      />
    </div>
  );
};

export default UserPermis;
