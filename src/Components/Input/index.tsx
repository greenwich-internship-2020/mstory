import clsx from 'clsx';

import React, {AllHTMLAttributes, FC, useState} from 'react';

import {Search} from '../Icons';

import {Caption2} from '../Typography';

import styles from './input.module.css';

interface InputProps extends AllHTMLAttributes<HTMLInputElement> {
  search?: boolean;
  errorNoti?: any;
  label?: string;
}

const Input: FC<InputProps> = ({
  search,
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
          search && styles.searchContainer,
          errorNoti && styles.errorContainer,
        )}
      >
        {search ? (
          <div className={clsx(styles.icon, focus && styles.focus)}>
            <Search />
          </div>
        ) : null}
        <input
          {...others}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          disabled={disabled}
          className={clsx(styles.input, search && styles.search)}
        />
      </div>
      {errorNoti ? (
        <Caption2 className={styles.error}>{errorNoti}</Caption2>
      ) : null}
    </div>
  );
};

export default Input;
