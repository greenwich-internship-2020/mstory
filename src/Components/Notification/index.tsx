import clsx from 'clsx';
import React, {AllHTMLAttributes, FC} from 'react';
import {Caption} from '../Typography';

import styles from './noti.module.css';

interface NotiProps extends AllHTMLAttributes<HTMLDivElement> {
  error?: boolean;
  noti?: boolean;
}

const Notification: FC<NotiProps> = ({children, error, noti}) => {
  return (
    <div
      className={clsx(styles.noti, error && styles.err, noti && styles.show)}
    >
      <Caption className={styles.text}>{children}</Caption>
    </div>
  );
};

export default Notification;
