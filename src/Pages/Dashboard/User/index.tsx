import React, {FC, useCallback, useEffect, useState} from 'react';

import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';

import UserDashboard from './components/UserDashboard';

import * as action from '../../../Redux/User/action';

interface UserProps {}

const User: FC<UserProps> = (props) => {
  const [page, setPage] = useState(1);

  const [keyword, setKeyword] = useState('');

  const dispatch = useDispatch();

  const getUserList = useCallback(
    () => dispatch(action.getUserList(page, keyword)),
    [dispatch, page, keyword],
  );

  const createUser = (user: object) => dispatch(action.createUser(user));

  const resetPage = () => dispatch({type: 'RESET_MODULE'});

  const editUser = (user: object, username: string) =>
    dispatch(action.editUser(user, username));

  const deleteUser = (username: string) =>
    dispatch(action.deleteUser(username));

  const UserData = useSelector(
    (state: RootStateOrAny) => state.userReducer.payload,
  );

  const total = useSelector((state: RootStateOrAny) => state.userReducer.total);

  const Loading = useSelector(
    (state: RootStateOrAny) => state.userReducer.loading,
  );

  const noti = useSelector((state: RootStateOrAny) => state.userReducer.noti);

  const error = useSelector((state: RootStateOrAny) => state.userReducer.error);

  const message = useSelector(
    (state: RootStateOrAny) => state.userReducer.message,
  );

  const totalPage = Math.round(total / 6);

  useEffect(
    () => {
      resetPage();
      setPage(1);
    },
    // eslint-disable-next-line
    [keyword],
  );

  useEffect(() => {
    getUserList();
  }, [getUserList]);

  return (
    <UserDashboard
      createUser={createUser}
      editUser={editUser}
      deleteUser={deleteUser}
      loading={Loading}
      userData={UserData}
      search={setKeyword}
      noti={noti}
      err={error}
      message={message}
      next={() => {
        return page < totalPage ? setPage(page + 1) : null;
      }}
      total={total}
    />
  );
};

export default User;
