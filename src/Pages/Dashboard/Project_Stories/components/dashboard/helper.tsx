import React from 'react';

import {Bug, Chore, Star} from '../../../../../Components/Icons';
import Tag from '../../../../../Components/Tags';

import {Caption} from '../../../../../Components/Typography';

import styles from './dashboard.module.css';

export const idenType = (type: any) => {
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

export const idenStatus = (stat: any) => {
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
