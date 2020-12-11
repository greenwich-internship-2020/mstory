import React, {FC, useCallback, useRef, useState} from 'react';

import {Edit, MemberLink, Time} from '../../../../../Components/Icons';

import Table from '../../../../../Components/Table';

import {Caption, Heading, Title} from '../../../../../Components/Typography';

import StatusModal from '../modal/statusModal/status';

import CreateStory from '../modal/mainModal';

import styles from './dashboard.module.css';

import {idenStatus, idenType} from './helper';

import Notfound from '../../../../../assets/notfound.png';

import clsx from 'clsx';

import {TextVariants} from '../../../../../Components/Typography/types';
import DropdownList from '../modal/mainModal/dropdownList';
import Debounce from '../../../../../Helper/debounce';

interface Props {
  data?: any;
  next?: any;
  total: any;
  edit?: any;
  editStatus?: any;
  deleteStory?: any;
  loading?: boolean;
  keyword?: string;
  members?: any;
  memberSearch?: any;
  memberList?: any;
  addOwner?: any;
  removeOwner?: any;
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
  memberSearch,
  members,
  memberList,
  addOwner,
  removeOwner,
}) => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  const [show, setShow] = useState(false);

  const [visible, setVisible] = useState(false);

  const [modal, setModal] = useState('');

  const [storyId, setStoryId] = useState('');

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

  const handleVisibleList = (storyId: string) => {
    setStoryId(storyId);
    setVisible(true);
  };

  const handleSearchMember = Debounce((e: any) => {
    const {value} = e.target;
    memberSearch(value);
  }, 200);

  const renderContent = () => {
    if (data) {
      return data.map((story: any, index: number) => {
        const owners = story.owners
          ? story.owners.map((owner: any) => owner.username).join(', ')
          : '';
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
              <Caption className={styles.username}>{owners}</Caption>
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
              <div className={clsx(styles.owner, loading && styles.disabled)}>
                <div
                  onClick={() => handleVisibleList(story.story_id)}
                  className={styles.memberIco}
                >
                  <MemberLink />
                </div>
                {!loading && visible && story.story_id === storyId ? (
                  <DropdownList
                    assignedList={story.owners}
                    search={memberSearch}
                    removeOwner={(owner: any) =>
                      removeOwner(story.story_id, owner)
                    }
                    setOwner={(owner: any) => addOwner(story.story_id, owner)}
                    handleSearchMember={handleSearchMember}
                    className={styles.dropList}
                    data={memberList}
                    setVisible={() => setVisible(false)}
                  />
                ) : null}
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
          search={memberSearch}
          data={members}
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
