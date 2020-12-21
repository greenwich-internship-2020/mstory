import React, {FC, useState} from 'react';

import Checkbox from '../../../../../Components/Checkbox';

import styles from '../dashboard.module.css';

interface Props {
  addValue?: any;
  checkValue?: any;
}

const ProjectPermis: FC<Props> = ({addValue, checkValue}) => {
  const [checkbox, setCheckbox] = useState({
    view: false,
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
        value={['EDIT_PROJECT_INFO', 'CREATE', 'EDIT']}
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
    </div>
  );
};

export default ProjectPermis;
