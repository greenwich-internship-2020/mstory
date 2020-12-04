import clsx from 'clsx';

import React, {FC, useCallback, useRef, useState} from 'react';

import Dropdown from '../../../../../Components/Dropdown';

import {Delete} from '../../../../../Components/Icons';

import Table from '../../../../../Components/Table';

import {Caption2, Heading, Title} from '../../../../../Components/Typography';

import {TextVariants} from '../../../../../Components/Typography/types';

import {firstLetterUpper} from '../../../../../Helper/firstLetterUpper';

import MemberDeleteModal from '../modal/delete';

import Notfound from '../../../../../assets/notfound.png';

import styles from './dashboard.module.css';

interface Props {
  data?: any;
  total: number;
  load?: boolean;
  next?: any;
  keyword?: string;
}

const MemberTable: FC<Props> = ({keyword, load, data, total, next}) => {
  const [show, setShow] = useState(false);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  const observer: any = useRef();

  const lastProject = useCallback(
    (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          next();
        }
      }, options);
      if (node) observer.current.observe(node);
    },
    // eslint-disable-next-line
    [observer, data],
  );

  const renderTable = () => {
    if (data) {
      return data.map((member: any, index: number) => {
        return (
          <tr
            ref={
              data.length === index + 1 && data.length < total
                ? lastProject
                : null
            }
            key={member.user_id}
            className={styles.member}
          >
            <td className={styles.user}>
              <Title>{member.fullname}</Title>
              <caption className={styles.username}>{member.username}</caption>
            </td>
            <td className={styles.rolesColumn}>
              <div className={styles.role}>
                <Dropdown
                  defaultName={firstLetterUpper(member.role)}
                  defaultValue={member.role}
                  options={[
                    {name: 'Guest', value: {memRole: 'guest'}},
                    {name: 'Owner', value: {memRole: 'owner'}},
                    {name: 'Reporter', value: {memRole: 'reporter'}},
                    {name: 'Developer', value: {memRole: 'developer'}},
                    {name: 'Maintainer', value: {memRole: 'maintainer'}},
                  ]}
                />
              </div>
            </td>
            <td className={styles.handler}>
              <div
                onClick={() => {
                  setShow(true);
                }}
                className={clsx(styles.delete, load && styles.disabled)}
              >
                <Delete />
              </div>
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <div className={styles.tableWrap}>
      {show ? <MemberDeleteModal hide={() => setShow(false)} /> : null}
      <Heading className={styles.count} variant={TextVariants.XS}>
        Members ({total})
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
          data ? (
            <tbody>
              {data.length > 0 ? (
                renderTable()
              ) : (
                <tr className={styles.notfound}>
                  <img
                    className={styles.notfoundimg}
                    src={Notfound}
                    alt="not found"
                  />
                  <Heading variant={TextVariants.S}>
                    {keyword !== ''
                      ? 'Sorry! Can not find any member'
                      : 'Sorry! there is nothing here'}
                  </Heading>
                </tr>
              )}
            </tbody>
          ) : null
        }
      />
    </div>
  );
};

export default MemberTable;
