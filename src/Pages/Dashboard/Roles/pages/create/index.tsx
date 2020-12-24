import React, {FC, useState} from 'react';
import Button from '../../../../../Components/Button';

import Input from '../../../../../Components/Input';

import DashboardTemplate from '../../../../../Components/Template/dashboard';

import {Heading} from '../../../../../Components/Typography';

import {TextVariants} from '../../../../../Components/Typography/types';

import ProjectPermis from '../../components/projectPermis';

import RolePermis from '../../components/rolePermis';

import UserPermis from '../../components/userPermis';

import styles from './create.module.css';

interface Props {}

const CreateRolesModal: FC<Props> = (props) => {
  const [checkValue, setValue] = useState<string[]>([]);

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

  console.log(checkValue);

  const checkedItem = (keyword: string) =>
    checkValue.find((item: any) => item === keyword);

  return (
    <DashboardTemplate button={<Button>Create</Button>} head="Create roles">
      <div className={styles.rolename}>
        <Input label="Role name" placeholder="Type role name" />
      </div>
      <div className={styles.permission}>
        <div className={styles.permissionTitle}>
          <Heading variant={TextVariants.XS}>Permissions</Heading>
        </div>
        <div className={styles.permisCheck}>
          <ProjectPermis checkValue={checkedItem} addValue={handleAddValue} />
          <UserPermis addValue={handleAddValue} />
          <RolePermis addValue={handleAddValue} />
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default CreateRolesModal;
