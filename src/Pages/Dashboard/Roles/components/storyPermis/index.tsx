import React, {FC} from 'react';

import Checkbox from '../../../../../Components/Checkbox';

import styles from '../dashboard.module.css';

interface Props {
  addValue?: any;
}

const StoryPermis: FC<Props> = ({addValue}) => {
  const handleChange = (e: any) => {
    const {value} = e.target;
    addValue(value);
  };

  return (
    <div className={styles.userStoryPermis}>
      <Checkbox
        onChange={handleChange}
        value="VIEW_STORIES"
        className={styles.checkbox}
        note="View list of users stories"
      />
      <Checkbox
        onChange={handleChange}
        value="VIEW_STORIES_DETAILS"
        className={styles.checkbox}
        note="View user story detail"
      />
      <Checkbox
        onChange={handleChange}
        value="CREATE_STORIES"
        className={styles.checkbox}
        note="Create user story"
      />
      <Checkbox
        onChange={handleChange}
        value="UPDATE_STORIES"
        className={styles.checkbox}
        note="Update user story"
      />
      <Checkbox
        onChange={handleChange}
        value="VIEW_STORIES_STATE"
        className={styles.checkbox}
        note="Update user story state"
      />
      <Checkbox
        onChange={handleChange}
        value="UPDATE_STORIES_OWNERS"
        className={styles.checkbox}
        note="Assign/remove owner of user story"
      />
      <Checkbox
        onChange={handleChange}
        value="CLOSE_STORIES"
        className={styles.checkbox}
        note="Close user story"
      />
    </div>
  );
};

export default StoryPermis;
