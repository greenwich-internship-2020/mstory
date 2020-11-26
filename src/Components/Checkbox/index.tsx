import clsx from 'clsx';

import React, {AllHTMLAttributes, FC} from 'react';
import {Body, Heading} from '../Typography';
import {TextVariants} from '../Typography/types';

import styles from './checkbox.module.css';

interface CheckboxProps extends AllHTMLAttributes<HTMLInputElement> {
  title?: string;
  note?: string;
}

const Checkbox: FC<CheckboxProps> = ({title, note, className, ...others}) => {
  return (
    <div className={styles.container}>
      <input
        className={clsx(styles.checkbox, className)}
        type="checkbox"
        {...others}
      />
      <div className={styles.content}>
        <Heading variant={TextVariants.XS}>{title}</Heading>
        <Body>{note}</Body>
      </div>
    </div>
  );
};

export default Checkbox;
