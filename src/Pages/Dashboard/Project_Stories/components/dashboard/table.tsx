import React, {FC} from 'react';

import {Bug, Chore, Edit, Star, Time} from '../../../../../Components/Icons';

import Table from '../../../../../Components/Table';

import Tag from '../../../../../Components/Tags';

import {Caption, Title} from '../../../../../Components/Typography';

import styles from './dashboard.module.css';

interface Props {
  data?: any;
}

const StoriesTable: FC<Props> = ({data}) => {
  const idenType = (type: any) => {
    switch (type) {
      case 'feature':
        return (
          <td className={styles.type}>
            <Star />
            <Caption className={styles.typeText}>Feature</Caption>
          </td>
        );
      case 'bug':
        return (
          <td className={styles.type}>
            <Bug />
            <Caption className={styles.typeText}>Bug</Caption>
          </td>
        );
      case 'chore':
        return (
          <td className={styles.type}>
            <Chore />
            <Caption className={styles.typeText}>Chore</Caption>
          </td>
        );
    }
  };

  const idenStatus = (stat: any) => {
    switch (stat) {
      case 'finished':
        return (
          <td className={styles.status}>
            <Tag content="Finished" />
          </td>
        );
      case 'accepted':
        return (
          <td className={styles.status}>
            <Tag content="Accepted" green />
          </td>
        );
      case 'rejected':
        return (
          <td className={styles.status}>
            <Tag content="Rejected" red />
          </td>
        );
      case 'delivered':
        return (
          <td className={styles.status}>
            <Tag content="Delivered" orange />
          </td>
        );
      case 'unstarted':
        return (
          <td className={styles.status}>
            <Tag content="Unstarted" blue />
          </td>
        );
    }
  };

  const renderContent = () => {
    if (data) {
      return data.map((story: any, index: number) => {
        return (
          <tr key={story.story_id} className={styles.content}>
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
