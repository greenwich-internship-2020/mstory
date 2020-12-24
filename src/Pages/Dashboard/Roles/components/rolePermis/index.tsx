import React, {FC} from 'react';

import Checkbox from '../../../../../Components/Checkbox';

import styles from '../dashboard.module.css';

interface Props {
  addValue?: any;
}

const RolePermis: FC<Props> = ({addValue}) => {
  const handleChange = (e: any) => {
    const {value} = e.target;
    addValue(value);
  };

  return (
    <div className={styles.roles}>
      <Checkbox name="all" note="Roles Permissions" />
      <div className={styles.rolePermis}>
        <Checkbox
          onChange={handleChange}
          value="VIEW_ROLES"
          className={styles.checkbox}
          note="View list of roles"
        />
        <Checkbox
          onChange={handleChange}
          value="VIEW_ROLES_DETAILS"
          className={styles.checkbox}
          note="View roles detail"
        />
        <Checkbox
          onChange={handleChange}
          value="CREATE_ROLES"
          className={styles.checkbox}
          note="Create role"
        />
        <Checkbox
          onChange={handleChange}
          value="UPDATE_ROLES"
          className={styles.checkbox}
          note="Update role"
        />
        <Checkbox
          onChange={handleChange}
          value="DELETE_ROLES"
          className={styles.checkbox}
          note="Delete role"
        />
      </div>
    </div>
  );
};

export default RolePermis;
