import React, {FC, useState} from 'react';

import Button from '../../../../../Components/Button';

import Dropdown from '../../../../../Components/Dropdown';

import Input from '../../../../../Components/Input';

import DashboardTemplate from '../../../../../Components/Template/dashboard';
import MemberTable from './table';

import styles from './dashboard.module.css';
import MemberModal from '../modal';

interface Props {}

const MemberDashboard: FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  return (
    <DashboardTemplate
      head="Members"
      button={<Button onOK={() => setShow(true)}>Invite</Button>}
    >
      {show ? <MemberModal hide={() => setShow(false)} /> : null}
      <div className={styles.event}>
        <div className={styles.search}>
          <Input search placeholder="Search" />
        </div>
        <div className={styles.roles}>
          <Dropdown options={[{name: 'All roles', value: {memRole: ''}}]} />
        </div>
      </div>
      <MemberTable />
    </DashboardTemplate>
  );
};

export default MemberDashboard;
