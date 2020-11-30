import React, {FC, useCallback, useRef, useState} from 'react';

import {Edit, Time} from '../../../../../Components/Icons';

import Table from '../../../../../Components/Table';

import {Caption, Heading, Title} from '../../../../../Components/Typography';

import StatusModal from '../modal/statusModal/status';

import CreateStory from '../modal/mainModal';

import styles from './dashboard.module.css';

import {idenStatus, idenType} from './helper';

import Notfound from '../../../../../assets/notfound.png';

import clsx from 'clsx';
import {TextVariants} from '../../../../../Components/Typography/types';

interface Props {
  data?: any;
  next?: any;
  total: any;
  edit?: any;
  editStatus?: any;
  deleteStory?: any;
  loading?: boolean;
  keyword?: string;
}

const StoriesTable: FC<Props> = ({
  data,
  next,
  total,
  edit,
  editStatus,
  deleteStory,
  loading,
  keyword,
}) => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  const [show, setShow] = useState(false);

  const [modal, setModal] = useState('');

  const [story, setStory] = useState({});

  const observer: any = useRef();

  const lastStories = useCallback(
    (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          next();
        }
      }, options);
      if (node) observer.current.observe(node);
    },
    // eslint-disable-next-line
    [observer, data],
  );

  const renderContent = () => {
    if (data) {
      return data.map((story: any, index: number) => {
        return (
          <tr
            ref={
              data.length === index + 1 && data.length < total
                ? lastStories
                : null
            }
            key={story.story_id}
            className={styles.content}
          >
            <td className={styles.name}>
              <Title>{story.title}</Title>
              <Caption className={styles.username}>tupac</Caption>
            </td>
            {idenType(story.type)}
            {idenStatus(story.status)}
            <td className={styles.point}>{story.points}</td>
            <td className={styles.action}>
              <div
                onClick={() => {
                  setShow(true);
                  setModal('edit');
                  setStory(story);
                }}
                className={clsx(styles.edit, loading && styles.disabled)}
              >
                <Edit />
              </div>
              <div
                onClick={() => {
                  setShow(true);
                  setModal('status');
                  setStory(story);
                }}
                className={clsx(styles.time, loading && styles.disabled)}
              >
                <Time />
              </div>
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <div>
      {show && modal === 'edit' ? (
        <CreateStory
          editStory={edit}
          foot="Update"
          detail={story}
          hide={() => setShow(false)}
          head="Update"
        />
      ) : null}
      {show && modal === 'status' ? (
        <StatusModal
          deleteStory={deleteStory}
          editStory={editStatus}
          detail={story}
          hide={() => setShow(false)}
        />
      ) : null}
      <Table
        thead={
          <tr className={styles.head}>
            <th className={styles.headItem}>
              <Caption>User story</Caption>
            </th>
            <th className={styles.headItem}>
              <Caption>Type</Caption>
            </th>
            <th className={styles.headItem}>
              <Caption>Status</Caption>
            </th>
            <th className={styles.headItem}>
              <Caption>Points</Caption>
            </th>
            <th></th>
          </tr>
        }
        tbody={
          data ? (
            <tbody>
              {data.length > 0 ? (
                renderContent()
              ) : (
                <tr className={styles.notfound}>
                  <img
                    className={styles.notfoundimg}
                    src={Notfound}
                    alt="not found"
                  />
                  <Heading variant={TextVariants.S}>
                    {keyword !== ''
                      ? 'Sorry! Can not find any stories'
                      : 'Sorry! there is nothing here'}
                  </Heading>
                </tr>
              )}
            </tbody>
          ) : null
        }
      />
    </div>
  );
};

export default StoriesTable;
