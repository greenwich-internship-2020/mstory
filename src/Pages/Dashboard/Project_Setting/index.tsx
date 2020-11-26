import React, {FC} from 'react';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';

import DashboardTemplate from '../../../Components/Template/dashboard';

import Main from './components/Main';

import * as action from '../../../Redux/Project/action';

interface SettingProps {}

const Setting: FC<SettingProps> = () => {
  const dispatch = useDispatch();

  const getSpecProject = (id: string) =>
    dispatch(action.getSpecificProject(id));

  const deleteProject = (id: string) => dispatch(action.deleteProject(id));

  const editProject = (id: string, project: object) =>
    dispatch(action.updateProject(id, project));

  const editStatus = (id: string, status: object) =>
    dispatch(action.updateStatus(id, status));

  const payload = useSelector(
    (state: RootStateOrAny) => state.projectReducer.payloadObj,
  );

  const loading = useSelector(
    (state: RootStateOrAny) => state.projectReducer.loading,
  );
  return (
    <DashboardTemplate ghost head="Setting">
      <Main
        editStatus={editStatus}
        editProject={editProject}
        loading={loading}
        getSpec={getSpecProject}
        payload={payload}
        deleteProject={deleteProject}
      />
    </DashboardTemplate>
  );
};

export default Setting;
