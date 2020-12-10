import React, {FC, useEffect, useState} from 'react';

import ReactMarkdown from 'react-markdown';

import Button from '../../../../../../Components/Button';

import Dropdown from '../../../../../../Components/Dropdown';

import Modal from '../../../../../../Components/Modal';

import Tag from '../../../../../../Components/Tags';

import {Caption2, Menu} from '../../../../../../Components/Typography';

import {firstLetterUpper} from '../../../../../../Helper/firstLetterUpper';
import {idenType} from './helper';

import styles from './modal.module.css';

interface Props {
  hide?: any;
  editStory?: any;
  detail?: any;
  deleteStory?: any;
}

const StatusModal: FC<Props> = ({hide, editStory, detail, deleteStory}) => {
  const [state, setState] = useState(detail ? detail.status : '');

  const [status, setStatus] = useState({status: ''});

  useEffect(() => {
    setStatus({status: state});
  }, [state]);

  const handleClose = () => {
    deleteStory(detail.story_id);
    hide();
  };

  const handleUpdate = () => {
    editStory(detail.story_id, status);
    hide();
  };

  const renderTag = () => {
    if (detail.owners) {
      return detail.owners.map((owner: any) => (
        <Tag className={styles.tag} content={owner.fullname} />
      ));
    }
  };

  return (
    <Modal
      cancel={hide}
      thirdFoot={
        <Button onOK={handleClose} error>
          Close
        </Button>
      }
      head={`User story`}
      infoHead="Miles Davis"
      infoDetail="#163012590 - Updated: 15 Mar 2019, 09:42pm"
      content={
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <Caption2 className={styles.label}>Title</Caption2>
            <Menu>{detail.title}</Menu>
          </div>
          <div className={styles.info}>
            <div className={styles.owner}>
              <Caption2 className={styles.label}>Owner</Caption2>
              <div className={styles.ownTag}>{renderTag()}</div>
            </div>
            <div className={styles.statType}>
              <Caption2 className={styles.label}>Story type</Caption2>
              {idenType(detail.type)}
            </div>
            <div className={styles.points}>
              <Caption2 className={styles.label}>Points</Caption2>
              <Menu>{detail.points} points</Menu>
            </div>
          </div>
          <div className={styles.state}>
            <Dropdown
              label="State"
              defaultName={detail ? firstLetterUpper(state) : 'Unstarted'}
              defaultValue={detail ? state : 'unstarted'}
              setStat={setState}
              edit
              options={[
                {name: 'Unstarted', value: {stoStat: 'unstarted'}},
                {name: 'Finished', value: {stoStat: 'finished'}},
                {name: 'Delivered', value: {stoStat: 'delivered'}},
                {name: 'Accepted', value: {stoStat: 'accepted'}},
                {name: 'Rejected', value: {stoStat: 'rejected'}},
              ]}
            />
          </div>
          <div className={styles.description}>
            <Caption2 className={styles.label}>Description</Caption2>
            <div className={styles.markdown}>
              <ReactMarkdown>{detail.description}</ReactMarkdown>
            </div>
          </div>
        </div>
      }
      foot={<Button onOK={handleUpdate}>Update</Button>}
    />
  );
};

export default StatusModal;
