import React, {FC, useState} from 'react';

import Dropdown from '../../../../../Components/Dropdown';

import {Loading} from '../../../../../Components/Icons';

import Input from '../../../../../Components/Input';

import Notification from '../../../../../Components/Notification';

import Debounce from '../../../../../Helper/debounce';

import styles from './dashboard.module.css';

import StoriesTable from './table';

interface Props {
  data?: any;
  load?: boolean;
  next?: any;
  total?: any;
  search?: any;
  setType?: any;
  setTus?: any;
  first?: any;
  edit?: any;
  editStatus?: any;
  deleteStory?: any;
  noti?: boolean;
  err?: boolean;
  message?: string;
}

const StoriesDashboard: FC<Props> = ({
  setType,
  setTus,
  search,
  data,
  load,
  next,
  total,
  first,
  edit,
  editStatus,
  deleteStory,
  noti,
  err,
  message,
}) => {
  const [searchValid, setSearchValid] = useState('');

  const [keyword, setKeyword] = useState('');

  const handleSearch = Debounce((e: any) => {
    let {value} = e.target;
    if (value.trim().length > 2 || value === '') {
      search(value.trim());
      setKeyword(value.trim());
      setSearchValid('');
    } else if (value.trim().length < 3)
      setSearchValid('Please type over 3 characters');
  }, 300);

  return (
    <div className={styles.wrapper}>
      <div className={styles.function}>
        <div className={styles.search}>
          <Input
            errorNoti={searchValid}
            placeholder="Search"
            search
            onChange={handleSearch}
          />
        </div>
        <div className={styles.typeSort}>
          <Dropdown
            setType={setType}
            first={first}
            options={[
              {name: 'All types', value: {stoType: ''}},
              {name: 'Feature', value: {stoType: 'feature'}},
              {name: 'Bug', value: {stoType: 'bug'}},
              {name: 'Chore', value: {stoType: 'chore'}},
            ]}
          />
        </div>
        <div className={styles.statusSort}>
          <Dropdown
            setStat={setTus}
            first={first}
            options={[
              {name: 'All status', value: {stoStat: ''}},
              {name: 'Unstarted', value: {stoStat: 'unstarted'}},
              {name: 'Finished', value: {stoStat: 'finished'}},
              {name: 'Delivered', value: {stoStat: 'delivered'}},
              {name: 'Accepted', value: {stoStat: 'accepted'}},
              {name: 'Rejected', value: {stoStat: 'rejected'}},
            ]}
          />
        </div>
      </div>
      <StoriesTable
        keyword={keyword}
        loading={load}
        deleteStory={deleteStory}
        editStatus={editStatus}
        edit={edit}
        total={total}
        next={next}
        data={data}
      />
      {load ? (
        <div className={styles.load}>
          <Loading />
        </div>
      ) : null}
      <Notification noti={noti} error={err}>
        {message}
      </Notification>
    </div>
  );
};

export default StoriesDashboard;
