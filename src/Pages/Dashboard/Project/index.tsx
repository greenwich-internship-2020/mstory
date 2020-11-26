import React, {FC, useCallback, useEffect, useState} from 'react';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import ProjectDashboard from './components/ProjectDashboard';

import * as action from '../../../Redux/Project/action';

interface ProjectProps {}

const Project: FC<ProjectProps> = (props) => {
  const dispatch = useDispatch();

  const [status, setStatus] = useState(true);

  const [keyword, setKeyword] = useState('');

  const [sort, setSort] = useState({
    view: 'updated_at',
    order: 'desc',
  });

  const [page, setPage] = useState(1);

  const getProjectList = useCallback(
    () => dispatch(action.getProjectList(status, page, keyword, sort)),
    [dispatch, page, status, keyword, sort],
  );

  const createProject = (project: any) =>
    dispatch(action.createProject(project));

  const ProjectData = useSelector(
    (state: RootStateOrAny) => state.projectReducer.payload,
  );

  const total = useSelector(
    (state: RootStateOrAny) => state.projectReducer.total,
  );

  const loading = useSelector(
    (state: RootStateOrAny) => state.projectReducer.loading,
  );

  const filterList = useSelector(
    (state: RootStateOrAny) => state.projectReducer.filterList,
  );

  const noti = useSelector(
    (state: RootStateOrAny) => state.projectReducer.noti,
  );

  const error = useSelector(
    (state: RootStateOrAny) => state.projectReducer.error,
  );

  const message = useSelector(
    (state: RootStateOrAny) => state.projectReducer.message,
  );

  const resetPage = () => dispatch({type: 'RESET_MODULE'});

  const totalPage = Math.round(total / 6);

  useEffect(
    () => {
      resetPage();
    },
    // eslint-disable-next-line
    [status, sort],
  );

  useEffect(() => {
    getProjectList();
  }, [getProjectList]);

  return (
    <ProjectDashboard
      total={total}
      search={setKeyword}
      next={() => {
        return page <= totalPage ? setPage(page + 1) : null;
      }}
      first={() => {
        setPage(1);
      }}
      createProject={createProject}
      status={setStatus}
      sort={setSort}
      noti={noti}
      err={error}
      message={message}
      loading={loading}
      projectData={keyword === '' ? ProjectData : filterList}
    />
  );
};

export default Project;
