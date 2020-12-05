import React, {FC, useState} from 'react';

import Button from '../../../../../Components/Button';

import Dropdown from '../../../../../Components/Dropdown';

import Input from '../../../../../Components/Input';

import DashboardTemplate from '../../../../../Components/Template/dashboard';

import MemberTable from './table';

import styles from './dashboard.module.css';

import MemberModal from '../modal';
import Debounce from '../../../../../Helper/debounce';
import {Loading} from '../../../../../Components/Icons';

interface Props {
  inviteMember?: any;
  data?: any;
  total: number;
  next?: any;
  search?: any;
  setRole?: any;
  first?: any;
  load?: boolean;
  keyword?: string;
  removeMember?: any;
  changeRole?: any;
}

const MemberDashboard: FC<Props> = ({
  search,
  setRole,
  total,
  next,
  data,
  first,
  load,
  keyword,
  inviteMember,
  removeMember,
  changeRole,
}) => {
  const [show, setShow] = useState(false);

  const [searchValid, setSearchValid] = useState('');

  const handleSearch = Debounce((e: any) => {
    let {value} = e.target;
    if (value.trim().length > 2 || value === '') {
      search(value.trim());
      setSearchValid('');
    } else if (value.trim().length < 3)
      setSearchValid('Please type over 3 characters');
  }, 500);

  return (
    <DashboardTemplate
      head="Members"
      button={<Button onOK={() => setShow(true)}>Invite</Button>}
    >
      {show ? (
        <MemberModal invite={inviteMember} hide={() => setShow(false)} />
      ) : null}
      <div className={styles.event}>
        <div className={styles.search}>
          <Input
            errorNoti={searchValid}
            onChange={handleSearch}
            search
            placeholder="Search"
          />
        </div>
        <div className={styles.roles}>
          <Dropdown
            setRole={setRole}
            first={first}
            options={[
              {name: 'All roles', value: {memRole: ''}},
              {name: 'Guest', value: {memRole: 'guest'}},
              {name: 'Owner', value: {memRole: 'owner'}},
              {name: 'Reporter', value: {memRole: 'reporter'}},
              {name: 'Developer', value: {memRole: 'developer'}},
              {name: 'Maintainer', value: {memRole: 'maintainer'}},
            ]}
          />
        </div>
      </div>
      <MemberTable
        changeRole={changeRole}
        removeMember={removeMember}
        keyword={keyword}
        load={load}
        total={total}
        next={next}
        data={data}
      />
      {load ? (
        <tr className={styles.load}>
          <Loading />
        </tr>
      ) : null}
    </DashboardTemplate>
  );
};

export default MemberDashboard;
