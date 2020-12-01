import React, {AllHTMLAttributes, FC} from 'react';

import {Heading} from '../Typography';

import styles from './form.module.css';

interface Props extends AllHTMLAttributes<HTMLDivElement> {
  head?: string;
}

const Form: FC<Props> = ({head, children}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <Heading>{head}</Heading>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Form;
