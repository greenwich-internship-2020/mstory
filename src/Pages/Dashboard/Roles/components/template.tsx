import React, {FC} from 'react';

import Button from '../../../../Components/Button';

import Input from '../../../../Components/Input';

import DashboardTemplate from '../../../../Components/Template/dashboard';

import RolesTable from './table';

import styles from './dashboard.module.css';

import {Link} from 'react-router-dom';

interface Props {}

const RolesTemplate: FC<Props> = (props) => {
  // const [show, setShow] = useState(false);

  // const renderModal = () => {
  //   return (
  //     <Modal
  //       cancel={() => setShow(false)}
  //       head="Create project role"
  //       foot={<Button>Create</Button>}
  //       content={
  //         <div className={styles.modal}>
  //           <div className={styles.rolename}>
  //             <Input label="Role name" placeholder="Type role name" />
  //           </div>
  //           <div className={styles.permission}>
  //             <Heading variant={TextVariants.XS}>Permissions</Heading>
  //             <div className={styles.permisCheck}>
  //               <ProjectPermis
  //                 checkValue={checkedItem}
  //                 addValue={handleAddValue}
  //               />
  //               <UserPermis addValue={handleAddValue} />
  //               <StoryPermis addValue={handleAddValue} />
  //               <MemberPermis addValue={handleAddValue} />
  //               <RolePermis addValue={handleAddValue} />
  //             </div>
  //           </div>
  //         </div>
  //       }
  //     />
  //   );
  // };

  return (
    <DashboardTemplate
      head="Project roles"
      button={
        <Link to="/roles/create">
          <Button>Create</Button>
        </Link>
      }
    >
      <div className={styles.search}>
        <Input placeholder="Search" search />
      </div>
      <RolesTable />
    </DashboardTemplate>
  );
};

export default RolesTemplate;
