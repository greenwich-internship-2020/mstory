import React, {FC} from 'react';

import styles from './modal.module.css';

interface Props {
  data?: any;
  setOwner?: any;
  setOwnerName?: any;
  setVisible?: any;
}

const DropdownList: FC<Props> = ({
  setVisible,
  setOwnerName,
  data,
  setOwner,
}) => {
  const renderItem = () => {
    if (data) {
      return data.map((item: any) => {
        return (
          <div
            onClick={() => {
              setOwner(item.user_id);
              setOwnerName(item.fullname);
            }}
            key={item.user_id}
            className={styles.listItem}
          >
            <div className={styles.basicInfo}>
              <div className={styles.listName}>{item.fullname}</div>
              <div className={styles.listUsername}>{item.username}</div>
            </div>
            <div className={styles.listRole}>{item.role}</div>
          </div>
        );
      });
    }
  };

  return (
    <div className={styles.list}>
      {data && data.length > 0
        ? renderItem()
        : 'Can not find any member have name like this, please try another name'}
    </div>
  );
};

export default DropdownList;
