import clsx from 'clsx';

import React, {AllHTMLAttributes, FC, useState} from 'react';
import ReactMarkdown from 'react-markdown';

import {Eye} from '../Icons';

import {Body, Caption2} from '../Typography';

import styles from './input.module.css';

interface TextProps extends AllHTMLAttributes<HTMLTextAreaElement> {
  errorNoti?: any;
  label?: string;
  markdown?: boolean;
  preview?: any;
}

const Text: FC<TextProps> = ({
  disabled,
  label,
  errorNoti,
  markdown,
  className,
  value,
  preview,
  ...others
}) => {
  const [focus, setFocus] = useState(false);

  const [eyeFocus, setEyeFocus] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        {label ? <div className={styles.label}>{label}</div> : null}
        {markdown ? (
          <div
            onClick={() => {
              eyeFocus === true ? setEyeFocus(false) : setEyeFocus(true);
            }}
            className={clsx(styles.eye, eyeFocus && styles.focus)}
          >
            <Eye />
            <Body className={styles.view}>Preview</Body>
          </div>
        ) : null}
      </div>
      <div
        className={clsx(
          styles.text,
          focus && styles.focus,
          disabled && styles.disabled,
          errorNoti && styles.errorContainer,
          eyeFocus && styles.eyeFocus,
          className,
        )}
      >
        {eyeFocus ? (
          <div className={styles.markdown}>
            <ReactMarkdown>{preview}</ReactMarkdown>
          </div>
        ) : null}
        <textarea
          value={value}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          {...others}
          className={clsx(styles.textarea, eyeFocus && styles.hide)}
        />
      </div>
      {errorNoti ? (
        <Caption2 className={styles.error}>{errorNoti}</Caption2>
      ) : null}
    </div>
  );
};

export default Text;
