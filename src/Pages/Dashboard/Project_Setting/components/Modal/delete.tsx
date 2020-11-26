import React, {FC, useEffect, useState} from 'react';

import Button from '../../../../../Components/Button';

import Input from '../../../../../Components/Input';

import Modal from '../../../../../Components/Modal';

import styles from './modal.module.css';

interface Props {
  hide?: any;
  name?: string;
  deleteProject?: any;
}

const DeleteModal: FC<Props> = ({name, hide, deleteProject}) => {
  const [delValid, setDelValid] = useState(false);

  const [nameType, setNameType] = useState('');

  const handleType = (e: any) => {
    const {value} = e.target;
    setNameType(value);
  };

  useEffect(() => {
    if (name === nameType) {
      setDelValid(true);
    } else {
      setDelValid(false);
    }
    // eslint-disable-next-line
  }, [nameType]);

  return (
    <Modal
      error
      cancel={hide}
      head="Delete project"
      foot={
        <Button onOK={deleteProject} disabled={!delValid} error>
          Confirm
        </Button>
      }
      content={
        <div className={styles.content}>
          <div className={styles.notiTop}>
            This action <strong>cannot</strong> be undone. This will permanently
            delete the <strong>{name}</strong>, and remove all collaborator
            associations.
          </div>
          <div className={styles.notiBot}>
            Please type <strong>{name}</strong> to confirm.
          </div>
          <div className={styles.input}>
            <Input onChange={handleType} placeholder="Type here" />
          </div>
        </div>
      }
    />
  );
};

export default DeleteModal;
