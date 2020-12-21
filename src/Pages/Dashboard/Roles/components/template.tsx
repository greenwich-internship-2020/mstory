import React, {FC, useState} from 'react';

import Button from '../../../../Components/Button';

import Input from '../../../../Components/Input';

import Modal from '../../../../Components/Modal';

import DashboardTemplate from '../../../../Components/Template/dashboard';

import {Heading} from '../../../../Components/Typography';

import {TextVariants} from '../../../../Components/Typography/types';

import MemberPermis from './memberPermis';

import ProjectPermis from './projectPermis';

import RolePermis from './rolePermis';

import StoryPermis from './storyPermis';

import RolesTable from './table';

import UserPermis from './userPermis';

import styles from './dashboard.module.css';

interface Props {}

const RolesTemplate: FC<Props> = (props) => {
  const [checkValue, setValue] = useState<string[]>([]);

  const [show, setShow] = useState(false);

  const handleAddValue = (value: any) => {
    const checkedItem = checkValue.findIndex((item: any) => item === value);

    let _checkValue = [...checkValue];

    if (checkedItem === -1)
      setValue(checkValue.length < 25 ? checkValue.concat(value) : ['*']);
    else {
      _checkValue.splice(checkedItem, 1);

      setValue(_checkValue);
    }
  };

  const checkedItem = (keyword: string) =>
    checkValue.find((item: any) => item === keyword);

  console.log(checkValue);

  const renderModal = () => {
    return (
      <Modal
        cancel={() => setShow(false)}
        head="Create project role"
        foot={<Button>Create</Button>}
        content={
          <div className={styles.modal}>
            <div className={styles.rolename}>
              <Input label="Role name" placeholder="Type role name" />
            </div>
            <div className={styles.permission}>
              <Heading variant={TextVariants.XS}>Permissions</Heading>
              <div className={styles.permisCheck}>
                <ProjectPermis
                  checkValue={checkedItem}
                  addValue={handleAddValue}
                />
                <UserPermis addValue={handleAddValue} />
                <StoryPermis addValue={handleAddValue} />
                <MemberPermis addValue={handleAddValue} />
                <RolePermis addValue={handleAddValue} />
              </div>
            </div>
          </div>
        }
      />
    );
  };

  return (
    <DashboardTemplate
      head="Project roles"
      button={<Button onOK={() => setShow(true)}>Create</Button>}
    >
      {show ? renderModal() : null}
      <div className={styles.search}>
        <Input placeholder="Search" search />
      </div>
      <RolesTable />
    </DashboardTemplate>
  );
};

export default RolesTemplate;
