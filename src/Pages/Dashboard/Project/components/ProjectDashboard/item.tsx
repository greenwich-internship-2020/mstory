import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {Lock, MemberLink, Setting} from '../../../../../Components/Icons';
import {Caption, Title} from '../../../../../Components/Typography';

import styles from './projectdashboard.module.css';

interface ItemProps {
  projectData?: any;
  total: number;
  lastProject?: any;
  project?: any;
  index?: any;
}

const ProjectItem: FC<ItemProps> = ({
  projectData,
  total,
  lastProject,
  project,
  index,
}) => {
  const currentDate = new Date();
  const updatedDate = new Date(project.updated_at);
  return (
    <tr
      ref={
        projectData.length === index + 1 && projectData.length < total
          ? lastProject
          : null
      }
      className={styles.listItem}
    >
      <td
        onClick={() => {
          localStorage.setItem(
            'project',
            JSON.stringify({id: project.project_id, name: project.name}),
          );
        }}
        className={styles.listColumn}
      >
        <Link
          className={styles.link}
          to={`/projects/${project.project_id}/stories`}
        >
          {!project.is_public ? <Lock /> : null}
        </Link>
      </td>
      <td
        onClick={() => {
          localStorage.setItem(
            'project',
            JSON.stringify({id: project.project_id, name: project.name}),
          );
        }}
        className={styles.listColumn}
      >
        <Link
          className={styles.link}
          to={`/projects/${project.project_id}/stories`}
        >
          <Title className={styles.name}>{project.name}</Title>
          <Caption className={styles.description}>
            {project.description}
          </Caption>
        </Link>
      </td>
      <td
        onClick={() => {
          localStorage.setItem(
            'project',
            JSON.stringify({id: project.project_id, name: project.name}),
          );
        }}
        className={styles.listColumn}
      >
        <Link
          className={styles.link}
          to={`/projects/${project.project_id}/stories`}
        >
          <Caption>
            Updated{' '}
            {currentDate.getFullYear() - updatedDate.getFullYear() !== 0 ||
            currentDate.getMonth() - updatedDate.getMonth() !== 0
              ? 'over a month'
              : `${currentDate.getDate() - updatedDate.getDate()} days ago`}
          </Caption>
        </Link>
      </td>
      <td>
        <div className={styles.listColumn}>
          <Link
            to={`/projects/${project.project_id}/members`}
            onClick={() => {
              localStorage.setItem(
                'project',
                JSON.stringify({id: project.project_id, name: project.name}),
              );
            }}
            className={styles.member}
          >
            <MemberLink />
          </Link>
          <Link
            to={`/projects/${project.project_id}/setting`}
            className={styles.setting}
          >
            <Setting />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ProjectItem;
