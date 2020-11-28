import React from 'react';

import {Bug, Chore, Star} from '../../../../../../Components/Icons';
import Tag from '../../../../../../Components/Tags';

import {Caption} from '../../../../../../Components/Typography';

import styles from './modal.module.css';

export const idenType = (type: any) => {
  switch (type) {
    case 'feature':
      return (
        <span className={styles.type}>
          <Star />
          <Caption className={styles.typeText}>Feature</Caption>
        </span>
      );
    case 'bug':
      return (
        <span className={styles.type}>
          <Bug />
          <Caption className={styles.typeText}>Bug</Caption>
        </span>
      );
    case 'chore':
      return (
        <span className={styles.type}>
          <Chore />
          <Caption className={styles.typeText}>Chore</Caption>
        </span>
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
