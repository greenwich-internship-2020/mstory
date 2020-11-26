import React, {FC, ReactNode} from 'react';

import styles from './table.module.css';

interface TableProps {
  thead?: ReactNode;
  tbody?: ReactNode;
}

const Table: FC<TableProps> = ({thead, tbody}) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>{thead}</thead>
      {tbody}
    </table>
  );
};

export default Table;
