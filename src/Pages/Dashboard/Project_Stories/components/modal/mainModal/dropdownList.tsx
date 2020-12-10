import React, {AllHTMLAttributes, FC, useEffect, useRef} from 'react';
import Input from '../../../../../../Components/Input';

import styles from './modal.module.css';

interface Props extends AllHTMLAttributes<HTMLDivElement> {
  data?: any;
  setOwner?: any;
  setVisible?: any;
  handleSearchMember?: any;
}

const DropdownList: FC<Props> = ({
  handleSearchMember,
  setVisible,
  data,
  setOwner,
  ...others
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setVisible();
    }
  };

  const renderItem = () => {
    if (data) {
      return data.map((item: any) => {
        return (
          <div
            onClick={() => {
              setOwner(item);
            }}
            key={item.user_id}
            className={styles.listItem}
            {...others}
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
    <div ref={ref} className={styles.list}>
      <Input
        autoComplete="off"
        onChange={handleSearchMember}
        name="owner"
        placeholder="Type owner name"
      />
      {data && data.length > 0
        ? renderItem()
        : 'Can not find any member have name like this, please try another name'}
    </div>
  );
};

export default DropdownList;
