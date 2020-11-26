import React, {FC, useEffect, useState} from 'react';

import Button from '../../../../../Components/Button';

import Input from '../../../../../Components/Input';

import Modal from '../../../../../Components/Modal';

import styles from './modal.module.css';

interface Props {
  hide?: any;
  payload?: any;
  updateStat?: any;
}

const StatusModal: FC<Props> = ({payload, hide, updateStat}) => {
  const [statvalid, setStatValid] = useState(false);

  const [nameType, setNameType] = useState('');

  const status = {
    is_active: !payload.is_active,
  };

  const handleType = (e: any) => {
    const {value} = e.target;
    setNameType(value);
  };

  useEffect(() => {
    if (payload.name === nameType) {
      setStatValid(true);
    } else {
      setStatValid(false);
    }
    // eslint-disable-next-line
  }, [nameType]);

  const handleUpdate = () => {
    updateStat(payload.project_id, status);
    hide();
  };

  return (
    <Modal
      error
      cancel={hide}
      head={payload.is_active ? 'Archieve project' : 'Unarchieve project'}
      foot={
        <Button onOK={handleUpdate} disabled={!statvalid} error>
          Confirm
        </Button>
      }
      content={
        <div className={styles.wrapper}>
          {payload.is_active ? (
            <div className={styles.content}>
              <div className={styles.noti}>
                This will make the <strong>{payload.name}</strong> project and
                user stories read-only.
              </div>
              <div className={styles.noti}>
                Ensure you’ve changed any project settings, considered closing
                all active user stories before you archive this project.
              </div>
              <div className={styles.noti}>
                Once archived, you can unarchive the project at any time.
              </div>
              <div className={styles.noti}>
                Please type <strong>{payload.name}</strong> to confirm.
              </div>
            </div>
          ) : (
            <div className={styles.content}>
              <div className={styles.noti}>
                This will make the <strong>{payload.name}</strong> project and
                user stories read-write.
              </div>
              <div className={styles.noti}>
                Please type <strong>{payload.name}</strong> to confirm.
              </div>
            </div>
          )}
          <div className={styles.input}>
            <Input onChange={handleType} placeholder="Type here" />
          </div>
        </div>
      }
    />
  );
};

export default StatusModal;
