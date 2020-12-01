import React, {AllHTMLAttributes, FC, ReactNode} from 'react';
import {TextVariants} from './types';

import styles from './typ.module.css';
import clsx from 'clsx';

interface TypoProps extends AllHTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  variant?: TextVariants;
}

export const Heading: FC<TypoProps> = ({children, variant, className}) => {
  return (
    <p
      className={clsx(
        styles.heading,
        TextVariants.XXL === variant && styles.ultraLarge,
        TextVariants.XL === variant && styles.extraLarge,
        TextVariants.L === variant && styles.large,
        TextVariants.S === variant && styles.small,
        TextVariants.XS === variant && styles.extraSmall,
        className,
      )}
    >
      {children}
    </p>
  );
};

export const Menu: FC<TypoProps> = ({children, className}) => {
  return <p className={clsx(styles.menu, className)}>{children}</p>;
};

export const Body: FC<TypoProps> = ({children, className}) => {
  return <p className={clsx(styles.body, className)}>{children}</p>;
};

export const BodySmall: FC<TypoProps> = ({children, className}) => {
  return <p className={clsx(styles.bodysmall, className)}>{children}</p>;
};

export const Title: FC<TypoProps> = ({children, className}) => {
  return <p className={clsx(styles.title, className)}>{children}</p>;
};

export const Caption: FC<TypoProps> = ({children, className}) => {
  return <p className={clsx(styles.caption, className)}>{children}</p>;
};

export const Caption2: FC<TypoProps> = ({children, className}) => {
  return <p className={clsx(styles.caption2, className)}>{children}</p>;
};
