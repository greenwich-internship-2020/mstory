import React, {FC, useCallback, useRef, useState} from 'react';

import Button from '../../../../../Components/Button';

import Dropdown from '../../../../../Components/Dropdown';

import Notfound from '../../../../../assets/notfound.png';

import {Loading} from '../../../../../Components/Icons';

import Input from '../../../../../Components/Input';

import Table from '../../../../../Components/Table';

import DashboardTemplate from '../../../../../Components/Template/dashboard';

import {Caption, Heading} from '../../../../../Components/Typography';
import Debounce from '../../../../../Helper/debounce';
import ProjectModal from '../ProjectModal';

import styles from './projectdashboard.module.css';
import {TextVariants} from '../../../../../Components/Typography/types';
import Notification from '../../../../../Components/Notification';
import ProjectItem from './item';

interface ProjectProps {
  projectData?: any;
  loading?: boolean;
  next?: any;
  total: number;
  search?: any;
  status?: any;
  first?: any;
  noti?: boolean;
  err?: boolean;
  sort?: any;
  createProject?: any;
  message?: string;
}

const ProjectDashboard: FC<ProjectProps> = ({
  next,
  projectData,
  loading,
  total,
  search,
  status,
  first,
  sort,
  err,
  noti,
  message,
  createProject,
}) => {
  const [show, setShow] = useState(false);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  const observer: any = useRef();

  const lastProject = useCallback(
    (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          next();
        }
      }, options);
      if (node) observer.current.observe(node);
    },
    // eslint-disable-next-line
    [observer, projectData],
  );

  const renderProjects = () => {
    if (projectData) {
      return projectData.map((project: any, index: number) => {
        return (
          <ProjectItem
            key={project.project_id}
            projectData={projectData}
            project={project}
            total={total}
            lastProject={lastProject}
            index={index}
          />
        );
      });
    }
  };

  const handleSearch = Debounce((e: any) => {
    const {value} = e.target;
    search(value);
  }, 500);

  return (
    <DashboardTemplate
      head="Projects"
      button={
        <Button
          onOK={() => {
            setShow(true);
          }}
        >
          Create
        </Button>
      }
    >
      {show ? (
        <ProjectModal
          setHide={() => {
            setShow(false);
          }}
          create={createProject}
        />
      ) : null}
      <div className={styles.filter}>
        <div className={styles.search}>
          <Input onChange={handleSearch} search placeholder="Search" />
        </div>
        <div className={styles.status}>
          <Dropdown
            status={status}
            first={first}
            options={[
              {name: 'Active', value: {stat: true}},
              {name: 'Archieved', value: {stat: false}},
            ]}
          />
        </div>
        <div className={styles.update}>
          <Dropdown
            sort={sort}
            first={first}
            options={[
              {
                name: 'Last Updated',
                value: {view: 'updated_at', order: 'desc'},
              },
              {
                name: 'Oldest Updated',
                value: {view: 'updated_at', order: 'asc'},
              },
              {
                name: 'Last Created',
                value: {view: 'created_at', order: 'desc'},
              },
              {
                name: 'Oldest Created',
                value: {view: 'created_at', order: 'asc'},
              },
            ]}
          />
        </div>
      </div>
      <Table
        thead={
          <tr>
            <th></th>
            <th className={styles.head}>
              <Caption>Project</Caption>
            </th>
            <th className={styles.head}>
              <Caption>Time</Caption>
            </th>
          </tr>
        }
        tbody={
          <tbody>
            {projectData.length > 0 ? (
              renderProjects()
            ) : (
              <tr className={styles.notfound}>
                <img
                  className={styles.notfoundimg}
                  src={Notfound}
                  alt="not found"
                />
                <Heading variant={TextVariants.S}>
                  Sorry! Can not find any project
                </Heading>
              </tr>
            )}
            {loading ? (
              <tr className={styles.load}>
                <Loading />
              </tr>
            ) : null}
          </tbody>
        }
      />
      <Notification noti={noti} error={err}>
        {message}
      </Notification>
    </DashboardTemplate>
  );
};

export default ProjectDashboard;
