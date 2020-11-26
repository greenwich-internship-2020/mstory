import clsx from 'clsx';

import React, {AllHTMLAttributes, FC, useState} from 'react';

import {Caption2} from '../Typography';

import styles from './input.module.css';

interface TextProps extends AllHTMLAttributes<HTMLTextAreaElement> {
  errorNoti?: any;
  label?: string;
}

const Text: FC<TextProps> = ({
  disabled,
  label,
  errorNoti,
  className,
  ...others
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <div className={clsx(styles.wrapper, className)}>
      {label ? <div className={styles.label}>{label}</div> : null}
      <div
        className={clsx(
          styles.container,
          focus && styles.focus,
          disabled && styles.disabled,
          errorNoti && styles.errorContainer,
        )}
      >
        <textarea
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          {...others}
          className={styles.textarea}
        />
      </div>
      {errorNoti ? (
        <Caption2 className={styles.error}>{errorNoti}</Caption2>
      ) : null}
    </div>
  );
};

export default Text;
