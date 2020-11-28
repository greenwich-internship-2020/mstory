import clsx from 'clsx';

import React, {AllHTMLAttributes, FC, useEffect, useRef, useState} from 'react';

import {Arrow} from '../Icons';

import {Menu} from '../Typography';

import styles from './dropdown.module.css';

interface DropProps extends AllHTMLAttributes<HTMLSelectElement> {
  options: any;
  defaultValue?: string;
  defaultName?: any;
  label?: string;
  status?: any;
  reset?: any;
  first?: any;
  sort?: any;
  setType?: any;
  setStat?: any;
  edit?: boolean;
  setPoints?: any;
}

const Dropdown: FC<DropProps> = ({
  options,
  label,
  defaultName = options[0].name,
  status,
  first,
  sort,
  setType,
  setStat,
  edit,
  setPoints,
}) => {
  const [focus, setFocus] = useState(false);

  const [name, setName] = useState(defaultName);

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setFocus(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  const handleClick = (option: any) => {
    const {stat, view, order, stoStat, stoType, stoPoint} = option.value;
    setFocus(false);
    setName(option.name);
    if (stat !== undefined || '') status(stat);
    if (view && order) sort({view, order});
    if (stoStat !== undefined) setStat(stoStat);
    if (stoType !== undefined) setType(stoType);
    if (stoPoint !== undefined) setPoints(stoPoint);
    if (!edit) first();
  };

  const renderOption = () => {
    return options.map((option: any, index: number) => {
      return (
        <li
          onClick={() => handleClick(option)}
          className={styles.option}
          key={index}
        >
          {option.name}
        </li>
      );
    });
  };

  return (
    <div className={styles.container}>
      {label ? <div className={styles.label}>{label}</div> : null}
      <div
        ref={ref}
        onClick={() => {
          focus ? setFocus(false) : setFocus(true);
        }}
        className={clsx(styles.container, focus && styles.focus)}
      >
        <div className={clsx(styles.select, focus && styles.focus)}>
          <Menu className={styles.text}>{name}</Menu>
          <span className={clsx(styles.icon, focus && styles.focus)}>
            <Arrow />
          </span>
        </div>

        <div className={clsx(styles.options, focus && styles.focus)}>
          {renderOption()}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
