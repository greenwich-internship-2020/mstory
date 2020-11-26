import React, {FC} from 'react';

import Card from '../../../../../Components/Card';

import {Archieve, Delete} from '../../../../../Components/Icons';

import {Caption, Title} from '../../../../../Components/Typography';

import styles from '../../setting.module.css';

interface Props {
  payload?: any;
  status?: any;
  deleted?: any;
}

const DangerCard: FC<Props> = ({payload, status, deleted}) => {
  return (
    <Card
      head="Danger zone"
      content={
        <div className={styles.dangerWrap}>
          <div className={styles.archieve}>
            <div className={styles.dangerText}>
              <Title className={styles.label}>
                {payload.is_active ? 'Archieve' : 'Unarchieve'} this project
              </Title>
              <Caption>
                {payload.is_active
                  ? 'Mark this repository as archived and read-only.'
                  : 'Mark this repository as unarchived and read-write.'}
              </Caption>
            </div>
            <div onClick={status} className={styles.archieveIco}>
              <Archieve />
            </div>
          </div>
          <div className={styles.delete}>
            <div className={styles.dangerText}>
              <Title className={styles.label}>Delete this project</Title>
              <Caption>
                Once you delete a project, there is no going back.
              </Caption>
            </div>
            <div onClick={deleted} className={styles.deleteIco}>
              <Delete />
            </div>
          </div>
        </div>
      }
    />
  );
};

export default DangerCard;
