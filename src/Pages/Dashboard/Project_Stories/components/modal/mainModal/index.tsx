import React, {FC, useEffect, useState} from 'react';

import Button from '../../../../../../Components/Button';

import Dropdown from '../../../../../../Components/Dropdown';

import Input from '../../../../../../Components/Input';

import Text from '../../../../../../Components/Input/text';

import Modal from '../../../../../../Components/Modal';

import Debounce from '../../../../../../Helper/debounce';
import {firstLetterUpper} from '../../../../../../Helper/firstLetterUpper';
import {Validate} from '../../../../../../Validation';

import styles from './modal.module.css';

interface Props {
  hide?: any;
  createStory?: any;
  editStory?: any;
  detail?: any;
  head?: string;
  foot?: string;
}

const CreateStory: FC<Props> = ({
  hide,
  createStory,
  editStory,
  detail,
  head,
  foot,
}) => {
  const [type, setType] = useState('');

  const [storyErr, setStoryErr] = useState({
    title: '',
    description: '',
  });

  const [points, setPoints] = useState(detail ? detail.points : 0);

  const [modalValid, setModalValid] = useState(false);

  let [titleValid, setTitleValid] = useState(false);

  let [descripValid, setdescripValid] = useState(false);

  const [story, setStory] = useState({
    title: detail ? detail.title : '',
    type: detail ? detail.type : 'feature',
    points: 0,
    description: detail ? detail.description : '',
  });

  useEffect(() => {
    setModalValid(titleValid && descripValid);
    if (
      story.title !== '' &&
      story.description !== '' &&
      storyErr.title === '' &&
      storyErr.description === ''
    ) {
      setTitleValid(true);
      setdescripValid(true);
    }
  }, [story, storyErr, titleValid, descripValid]);

  const handleError = Debounce((name: any, value: any) => {
    let message;
    switch (name) {
      case 'title':
        if (Validate(value.trim(), 80)) {
          setTitleValid(false);
          message = Validate(value.trim(), 80);
        }
        setTitleValid((titleValid = message ? false : true));
        break;
      case 'description':
        if (Validate(value.trim(), 5000)) {
          setdescripValid(false);
          message = Validate(value.trim(), 5000);
        }
        setdescripValid((descripValid = message ? false : true));
        break;
      default:
        return 'Invalid';
    }
    setStoryErr({...storyErr, [name]: message});
  }, 300);

  const handleTyping = (e: any) => {
    const {name, value} = e.target;
    setStory({...story, [name]: value});
    handleError(name, value);
  };

  useEffect(() => {
    setStory({...story, type});
    if (titleValid && descripValid) setModalValid(true);
    // eslint-disable-next-line
  }, [type]);

  useEffect(() => {
    setStory({...story, points});
    // eslint-disable-next-line
  }, [points]);

  return (
    <Modal
      cancel={hide}
      head={`${head} user story`}
      content={
        <div className={styles.wrap}>
          <div className={styles.title}>
            <Input
              errorNoti={storyErr.title}
              name="title"
              defaultValue={detail ? detail.title : ''}
              onChange={handleTyping}
              placeholder="Type title"
              label="Title"
            />
          </div>
          <div className={styles.detail}>
            <div className={styles.type}>
              <Dropdown
                label="Story type"
                defaultName={detail ? firstLetterUpper(detail.type) : 'Feature'}
                defaultValue={detail ? detail.type : 'feature'}
                setType={setType}
                edit
                options={[
                  {name: 'Feature', value: {stoType: 'feature'}},
                  {name: 'Bug', value: {stoType: 'bug'}},
                  {name: 'Chore', value: {stoType: 'chore'}},
                ]}
              />
            </div>
            <div className={styles.points}>
              <Dropdown
                label="Points"
                defaultName={detail ? detail.points : 0}
                defaultValue={detail ? detail.points : 0}
                setPoints={setPoints}
                edit
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
            <Input
              disabled
              name="owner"
              placeholder="Type owner"
              label="Owner"
            />
          </div>
          <div className={styles.description}>
            <Text
              errorNoti={storyErr.description}
              defaultValue={detail ? detail.description : ''}
              preview={story.description}
              name="description"
              onChange={handleTyping}
              markdown
              className={styles.descrip}
              label="Description"
            />
          </div>
        </div>
      }
      foot={
        <Button
          disabled={!modalValid}
          onOK={() => {
            createStory
              ? createStory(story)
              : editStory(detail.story_id, story);
            hide();
          }}
        >
          {foot}
        </Button>
      }
    />
  );
};

export default CreateStory;
