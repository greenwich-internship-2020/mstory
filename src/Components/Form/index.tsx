import React, {AllHTMLAttributes, FC} from 'react';
import {firstLetterUpper} from '../../Helper/firstLetterUpper';

import {Heading, Title} from '../Typography';

import styles from './form.module.css';

interface Props extends AllHTMLAttributes<HTMLDivElement> {
  head?: string;
  error?: string;
}

const Form: FC<Props> = ({head, children, error}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <Heading>{head}</Heading>
        {error ? (
          <Title className={styles.error}>{firstLetterUpper(error)}</Title>
        ) : null}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Form;
