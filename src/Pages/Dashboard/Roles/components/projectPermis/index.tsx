import React, {FC, useState} from 'react';

import Checkbox from '../../../../../Components/Checkbox';

import styles from '../dashboard.module.css';

interface Props {
  addValue?: any;
  checkValue?: any;
}

const ProjectPermis: FC<Props> = ({addValue, checkValue}) => {
  const [checkbox, setCheckbox] = useState({
    view:
      checkValue('CREATE_PROJECT') || checkValue('EDIT_PROJECT_INFO')
        ? true
        : false,
    create: false,
    viewSetting: false,
    updateProject: false,
    updateStatus: false,
  });

  const handleChange = (e: any) => {
    const {name, value, checked} = e.target;
    setCheckbox({...checkbox, [name]: checked});
    addValue(value);
  };

  return (
    <div className={styles.projectCheck}>
      <Checkbox name="all" note="Project Permissions" />
      <div className={styles.projectPermis}>
        <Checkbox
          className={styles.checkbox}
          name="view"
          onChange={handleChange}
          checked={checkbox.view}
          value="VIEW_PROJECTS"
          note="View list of projects"
        />
        <Checkbox
          className={styles.checkbox}
          name="create"
          onChange={handleChange}
          checked={checkbox.create}
          value="CREATE_PROJECT"
          note="Create project"
        />
        <Checkbox
          className={styles.checkbox}
          name="viewSetting"
          onChange={handleChange}
          checked={checkbox.viewSetting}
          value="VIEW_PROJECTS_DETAILS"
          note="View project settings"
        />

        <Checkbox
          className={styles.checkbox}
          name="updateProject"
          onChange={handleChange}
          checked={checkbox.updateProject}
          value="EDIT_PROJECT_INFO"
          note="Edit project info"
        />

        <Checkbox
          className={styles.checkbox}
          name="updateStatus"
          onChange={handleChange}
          checked={checkbox.updateStatus}
          value="EDIT_PROJECT_STATUS"
          note="Edit project status"
        />

        <Checkbox
          className={styles.checkbox}
          name="viewStories"
          onChange={handleChange}
          checked={checkbox.updateStatus}
          value="VIEW_STORIES"
          note="View story"
        />

        <Checkbox
          className={styles.checkbox}
          name="viewMembers"
          onChange={handleChange}
          checked={checkbox.updateStatus}
          value="VIEW_MEMBERS"
          note="View members"
        />
      </div>
    </div>
  );
};

export default ProjectPermis;
