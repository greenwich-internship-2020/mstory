import clsx from 'clsx';
import React, {AllHTMLAttributes, FC} from 'react';

import styles from './button.module.css';

export interface ButtonProps extends AllHTMLAttributes<HTMLButtonElement> {
  onOK?: any;
  onCancel?: any;
  ghost?: boolean;
  disabled?: boolean;
  error?: boolean;
}

const Button: FC<ButtonProps> = ({
  onOK,
  onCancel,
  className,
  ghost,
  children,
  disabled,
  error,
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
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
