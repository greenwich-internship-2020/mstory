import React, {FC} from 'react';

import Button from '../../../../../Components/Button';

import Dropdown from '../../../../../Components/Dropdown';
import {Eye} from '../../../../../Components/Icons';

import Input from '../../../../../Components/Input';

import Text from '../../../../../Components/Input/text';

import Modal from '../../../../../Components/Modal';
import {Body} from '../../../../../Components/Typography';

import styles from './modal.module.css';

interface Props {
  hide?: any;
}

const CreateStory: FC<Props> = ({hide}) => {
  return (
    <Modal
      cancel={hide}
      head="Create user story"
      content={
        <div className={styles.wrap}>
          <div className={styles.title}>
            <Input placeholder="Type title" label="Title" />
          </div>
          <div className={styles.detail}>
            <div className={styles.type}>
              <Dropdown
                label="Story type"
                options={[
                  {name: 'All types', value: {stoType: ''}},
                  {name: 'Feature', value: {stoType: 'feature'}},
                  {name: 'Bug', value: {stoType: 'bug'}},
                  {name: 'Chore', value: {stoType: 'chore'}},
                ]}
              />
            </div>
            <div className={styles.points}>
              <Dropdown
                label="Points"
                options={[
                  {name: '0', value: {stoPoint: 0}},
                  {name: '1', value: {stoPoint: 1}},
                  {name: '2', value: {stoPoint: 2}},
                  {name: '3', value: {stoPoint: 3}},
                ]}
              />
            </div>
          </div>
          <div className={styles.owner}>
            <Input placeholder="Type owner" label="Owner" />
          </div>
          <div className={styles.description}>
            <div className={styles.eye}>
              <Eye />
              <Body className={styles.view}>Preview</Body>
            </div>
            <Text className={styles.descrip} label="Description" />
          </div>
        </div>
      }
      foot={<Button>Create</Button>}
    />
  );
};

export default CreateStory;
