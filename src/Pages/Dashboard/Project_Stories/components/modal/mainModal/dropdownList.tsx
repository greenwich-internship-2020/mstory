import clsx from 'clsx';
import React, {AllHTMLAttributes, FC, useEffect, useRef} from 'react';
import Input from '../../../../../../Components/Input';

import styles from './modal.module.css';

interface Props extends AllHTMLAttributes<HTMLDivElement> {
  data?: any;
  setOwner?: any;
  setVisible?: any;
  handleSearchMember?: any;
  assignedList?: any;
  search?: any;
  removeOwner?: any;
}

const DropdownList: FC<Props> = ({
  handleSearchMember,
  setVisible,
  data,
  setOwner,
  className,
  assignedList,
  search,
  removeOwner,
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
      search('');
    }
  };

  const renderItem = () => {
    if (data) {
      return data.map((item: any) => {
        const assignedItem = assignedList.find(
          (owner: any) => owner.user_id === item.user_id,
        );
        return (
          <div
            onClick={() => {
              assignedItem && removeOwner ? removeOwner(item) : setOwner(item);
            }}
            key={item.user_id}
            className={clsx(styles.listItem, assignedItem && styles.checked)}
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
    <div ref={ref} className={clsx(styles.list, className)}>
      <div className={styles.searchMember}>
        <Input
          autoComplete="off"
          onChange={handleSearchMember}
          name="owner"
          placeholder="Type owner name"
        />
      </div>
      {data && data.length > 0
        ? renderItem()
        : 'Can not find any member have name like this, please try another name'}
    </div>
  );
};

export default DropdownList;
