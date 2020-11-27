import React, {FC, useCallback, useRef} from 'react';

import {Edit, Time} from '../../../../../Components/Icons';

import Table from '../../../../../Components/Table';

import {Caption, Title} from '../../../../../Components/Typography';

import styles from './dashboard.module.css';

import {idenStatus, idenType} from './helper';

interface Props {
  data?: any;
  next?: any;
  total: any;
}

const StoriesTable: FC<Props> = ({data, next, total}) => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

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
              {/* <Caption>{story}</Caption> */}
            </td>
            {idenType(story.type)}
            {idenStatus(story.status)}
            <td className={styles.point}>{story.points}</td>
            <td className={styles.action}>
              <div className={styles.edit}>
                <Edit />
              </div>
              <div className={styles.edit}>
                <Time />
              </div>
            </td>
          </tr>
        );
      });
    }
  };

  return (
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
      tbody={<tbody>{renderContent()}</tbody>}
    />
  );
};

export default StoriesTable;
