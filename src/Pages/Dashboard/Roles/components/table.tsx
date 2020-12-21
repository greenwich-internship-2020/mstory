import React, {FC} from 'react';
import {Delete, Edit} from '../../../../Components/Icons';
import Table from '../../../../Components/Table';
import {Caption2, Title} from '../../../../Components/Typography';

import styles from './dashboard.module.css';

interface Props {}

const RolesTable: FC<Props> = (props) => {
  return (
    <Table
      thead={
        <tr>
          <th className={styles.head}>
            <Caption2>Roles</Caption2>
          </th>
          <th className={styles.head}></th>
        </tr>
      }
      tbody={
        <tbody>
          <tr className={styles.listItem}>
            <td className={styles.guest}>
              <Title>Guest</Title>
            </td>
            <td className={styles.action}>
              <div className={styles.edit}>
                <Edit />
              </div>
              <div className={styles.del}>
                <Delete />
              </div>
            </td>
          </tr>
        </tbody>
      }
    />
  );
};

export default RolesTable;
