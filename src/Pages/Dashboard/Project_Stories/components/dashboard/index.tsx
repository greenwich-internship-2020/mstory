import React, {FC} from 'react';
import Dropdown from '../../../../../Components/Dropdown';
import {Loading} from '../../../../../Components/Icons';
import Input from '../../../../../Components/Input';
import Debounce from '../../../../../Helper/debounce';

import styles from './dashboard.module.css';
import StoriesTable from './table';

interface Props {
  data?: any;
  load?: boolean;
  next?: any;
  total?: any;
  search?: any;
}

const StoriesDashboard: FC<Props> = ({search, data, load, next, total}) => {
  const handleSearch = Debounce((e: any) => {
    const {value} = e.target;
    search(value);
  }, 300);

  return (
    <div className={styles.wrapper}>
      <div className={styles.function}>
        <div className={styles.search}>
          <Input placeholder="Search" search onChange={handleSearch} />
        </div>
        <div className={styles.typeSort}>
          <Dropdown
            options={[
              {name: 'All types', value: ''},
              {name: 'Feature', value: 'feature'},
              {name: 'Bug', value: 'bug'},
              {name: 'Chore', value: 'chore'},
            ]}
          />
        </div>
        <div className={styles.statusSort}>
          <Dropdown
            options={[
              {name: 'All status', value: ''},
              {name: 'Unstarted', value: 'unstarted'},
              {name: 'Finished', value: 'finished'},
              {name: 'Delivered', value: 'delivered'},
              {name: 'Accepted', value: 'accepted'},
              {name: 'Rejected', value: 'rejected'},
            ]}
          />
        </div>
      </div>
      <StoriesTable total={total} next={next} data={data} />
      {load ? (
        <div className={styles.load}>
          <Loading />
        </div>
      ) : null}
    </div>
  );
};

export default StoriesDashboard;
