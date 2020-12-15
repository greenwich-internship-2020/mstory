import clsx from 'clsx';
import React, {AllHTMLAttributes, FC} from 'react';

import styles from './button.module.css';

export interface ButtonProps extends AllHTMLAttributes<HTMLButtonElement> {
  onOK?: any;
  onCancel?: any;
  ghost?: boolean;
  disabled?: boolean;
  error?: boolean;
  load?: boolean;
}

const Button: FC<ButtonProps> = ({
  onOK,
  onCancel,
  className,
  ghost,
  children,
  disabled,
  error,
  load,
}) => {
  return (
    <button
      onClick={onOK || onCancel}
      className={clsx(
        styles.button,
        error && styles.error,
        ghost && styles.ghost,
        className,
      )}
      disabled={load ? true : disabled}
    >
      {!load ? children : <p className={styles.load}></p>}
    </button>
  );
};

export default Button;
