import React, {FC, useCallback, useEffect, useState} from 'react';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import MemberDashboard from './components/dashboard';

import * as action from '../../../Redux/Member/action';

interface Props {}

interface ParamTypes {
  id?: string;
}

const Members: FC<Props> = (props) => {
  const [page, setPage] = useState(1);

  const {id} = useParams<ParamTypes>();

  const [keyword, setKeyword] = useState('');

  const [role, setRole] = useState('');

  const inviteMember = (id: string, member: object) =>
    dispatch(action.inviteMember(id, member));

  const dispatch = useDispatch();

  const resetPage = () => dispatch({type: 'RESET_MODULE'});

  const getMemberList = useCallback(
    () => dispatch(action.getMemberList(id, keyword, role, page)),
    [dispatch, id, keyword, role, page],
  );

  const payload = useSelector(
    (state: RootStateOrAny) => state.memberReducer.payload,
  );

  const total = useSelector(
    (state: RootStateOrAny) => state.memberReducer.total,
  );

  const loading = useSelector(
    (state: RootStateOrAny) => state.memberReducer.loading,
  );

  const totalPage = Math.round(total / 6);

  useEffect(
    () => {
      resetPage();
      setPage(1);
    },
    // eslint-disable-next-line
    [keyword, role],
  );

  useEffect(() => {
    getMemberList();
  }, [getMemberList]);

  return (
    <MemberDashboard
      load={loading}
      search={setKeyword}
      first={() => setPage(1)}
      setRole={setRole}
      keyword={keyword}
      next={() => (page < totalPage ? setPage(page + 1) : null)}
      total={total}
      data={payload}
      inviteMember={inviteMember}
    />
  );
};

export default Members;
