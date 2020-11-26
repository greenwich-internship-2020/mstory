import React, {FC} from 'react';

import Button from '../../../../../Components/Button';

import Card from '../../../../../Components/Card';

import {Lock} from '../../../../../Components/Icons';

import Tag from '../../../../../Components/Tags';

import {Body, Caption, Caption2} from '../../../../../Components/Typography';

import styles from '../../setting.module.css';

interface Props {
  payload?: any;
  update?: any;
}

const UpdateCard: FC<Props> = ({payload, update}) => {
  return (
    <Card
      head="Project"
      tag={payload.is_active ? null : <Tag content="Archieved" />}
      content={
        <div className={styles.content}>
          <div className={styles.name}>
            <Caption2 className={styles.label}>Project name</Caption2>
            <Body>{payload.name}</Body>
          </div>
          <div className={styles.description}>
            <Caption2 className={styles.label}>Description</Caption2>
            <Body className={styles.descriptionContent}>
              {payload.description}
            </Body>
          </div>
          {!payload.is_public ? (
            <div className={styles.status}>
              <div className={styles.lock}>
                <Lock />
              </div>
              <Caption>Private project</Caption>
            </div>
          ) : (
            <div className={styles.status}>
              <Caption>Public project</Caption>
            </div>
          )}
        </div>
      }
      foot={
        <Button
          disabled={!payload.is_active}
          onOK={update}
          className={styles.update}
        >
          Update
        </Button>
      }
    />
  );
};

export default UpdateCard;
