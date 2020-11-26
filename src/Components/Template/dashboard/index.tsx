import clsx from 'clsx';
import React, {AllHTMLAttributes, FC, ReactNode} from 'react';

import {Heading} from '../../Typography';

import {TextVariants} from '../../Typography/types';

import styles from './dashboard.module.css';

interface TemplateProps extends AllHTMLAttributes<HTMLDivElement> {
  head?: string;
  button?: ReactNode;
  ghost?: boolean;
}

const DashboardTemplate: FC<TemplateProps> = ({
  head,
  button,
  children,
  ghost,
}) => {
  return (
    <div className={styles.template}>
      <div className={styles.head}>
        <div className={styles.title}>
          <Heading variant={TextVariants.L}>{head}</Heading>
        </div>
        <div className={styles.button}>{button}</div>
      </div>
      <div className={clsx(styles.content, ghost && styles.ghost)}>
        {children}
      </div>
    </div>
  );
};

export default DashboardTemplate;
