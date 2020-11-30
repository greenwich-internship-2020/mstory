import React, {FC, useState} from 'react';
import Dropdown from '../../../../../Components/Dropdown';
import {Delete} from '../../../../../Components/Icons';
import Table from '../../../../../Components/Table';
import {Caption2, Heading, Title} from '../../../../../Components/Typography';
import {TextVariants} from '../../../../../Components/Typography/types';
import MemberDeleteModal from '../modal/delete';

import styles from './dashboard.module.css';

interface Props {}

const MemberTable: FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.tableWrap}>
      {show ? <MemberDeleteModal hide={() => setShow(false)} /> : null}
      <Heading className={styles.count} variant={TextVariants.XS}>
        Members (5)
      </Heading>
      <Table
        thead={
          <tr>
            <th className={styles.head}>
              <Caption2>User</Caption2>
            </th>
            <th className={styles.head}>
              <Caption2>Role</Caption2>
            </th>
            <th></th>
          </tr>
        }
        tbody={
          <tr className={styles.member}>
            <td className={styles.user}>
              <Title>Tupac Amaru Shakur</Title>
              <caption className={styles.username}>tupac</caption>
            </td>
            <td className={styles.rolesColumn}>
              <div className={styles.role}>
                <Dropdown
                  options={[{name: 'Owner', value: {memRole: 'owner'}}]}
                />
              </div>
            </td>
            <td className={styles.handler}>
              <div
                onClick={() => {
                  setShow(true);
                }}
                className={styles.delete}
              >
                <Delete />
              </div>
            </td>
          </tr>
        }
      />
    </div>
  );
};

export default MemberTable;
