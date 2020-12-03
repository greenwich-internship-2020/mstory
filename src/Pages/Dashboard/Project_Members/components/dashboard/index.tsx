import React, {FC, useState} from 'react';

import Button from '../../../../../Components/Button';

import Dropdown from '../../../../../Components/Dropdown';

import Input from '../../../../../Components/Input';

import DashboardTemplate from '../../../../../Components/Template/dashboard';

import MemberTable from './table';

import styles from './dashboard.module.css';

import MemberModal from '../modal';

interface Props {
  inviteMember?: any;
  data?: any;
  total: number;
  next?: any;
}

const MemberDashboard: FC<Props> = ({total, next, data, inviteMember}) => {
  const [show, setShow] = useState(false);

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
          <Input search placeholder="Search" />
        </div>
        <div className={styles.roles}>
          <Dropdown
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
      <MemberTable total={total} next={next} data={data} />
    </DashboardTemplate>
  );
};

export default MemberDashboard;
