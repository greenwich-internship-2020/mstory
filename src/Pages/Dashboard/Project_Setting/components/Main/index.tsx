import React, {FC, useEffect, useState} from 'react';

import {useParams} from 'react-router-dom';

import {Loading} from '../../../../../Components/Icons';

import styles from '../../setting.module.css';

import DeleteModal from '../Modal/delete';

import UpdateModal from '../Modal/update';

import StatusModal from '../Modal/updateStatus';

import DangerCard from './dangerCard';

import UpdateCard from './updateCard';

interface Props {
  getSpec?: any;
  payload?: any;
  loading?: boolean;
  deleteProject?: any;
  editProject?: any;
  editStatus?: any;
}

interface ParamTypes {
  id?: string;
}

const Main: FC<Props> = ({
  getSpec,
  payload,
  deleteProject,
  loading,
  editProject,
  editStatus,
}) => {
  const {id} = useParams<ParamTypes>();

  useEffect(() => {
    getSpec(id);
    localStorage.removeItem('project');
    // eslint-disable-next-line
  }, []);

  const [show, setShow] = useState(false);

  const [modalStat, setModalStat] = useState('create');

  const renderModal = () => {
    switch (modalStat) {
      case 'delete':
        return (
          <DeleteModal
            deleteProject={() => {
              deleteProject(payload.project_id);
            }}
            name={payload.name}
            hide={() => {
              setShow(false);
            }}
          />
        );
      case 'status':
        return (
          <StatusModal
            updateStat={editStatus}
            payload={payload}
            hide={() => {
              setShow(false);
            }}
          />
        );
      case 'update':
        return (
          <UpdateModal
            updateProject={editProject}
            project={payload}
            hide={() => {
              setShow(false);
            }}
          />
        );
    }
  };

  const renderHTML = () => {
    return (
      <div className={styles.wrapper}>
        {show ? renderModal() : null}
        <div className={styles.card}>
          <UpdateCard
            payload={payload}
            update={() => {
              setShow(true);
              setModalStat('update');
            }}
          />
        </div>
        <div className={styles.card}>
          <DangerCard
            payload={payload}
            status={() => {
              setShow(true);
              setModalStat('status');
            }}
            deleted={() => {
              setShow(true);
              setModalStat('delete');
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      {!loading ? (
        renderHTML()
      ) : (
        <div className={styles.load}>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Main;
