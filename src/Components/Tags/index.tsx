import clsx from 'clsx';
import React, {AllHTMLAttributes, FC} from 'react';

import styles from './tag.module.css';

interface TagProps extends AllHTMLAttributes<HTMLDivElement> {
  content?: string;
  orange?: boolean;
  blue?: boolean;
  green?: boolean;
  red?: boolean;
}

const Tag: FC<TagProps> = ({content, orange, blue, green, red, className}) => {
  return (
    <div
      className={clsx(
        styles.tag,
        orange && styles.orange,
        blue && styles.blue,
        green && styles.green,
        red && styles.red,
        className,
      )}
    >
      {content}
    </div>
  );
};

export default Tag;
