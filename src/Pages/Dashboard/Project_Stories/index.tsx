import React, {FC, useCallback, useEffect, useState} from 'react';

import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';

import Button from '../../../Components/Button';

import DashboardTemplate from '../../../Components/Template/dashboard';

import StoriesDashboard from './components/dashboard';

import CreateStory from './components/modal/mainModal';

import * as action from '../../../Redux/Stories/action';

import * as memberAction from '../../../Redux/Member/action';

import {useParams} from 'react-router-dom';

interface Props {}

interface ParamTypes {
  id: string;
}

const Stories: FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  const [page, setPage] = useState(1);

  const [keyword, setKeyword] = useState('');

  const [memberKeyword, setMemberKeyword] = useState('');

  const role = '';

  const [status, setStatus] = useState('');

  const [type, setType] = useState('');

  const {id} = useParams<ParamTypes>();

  const dispatch = useDispatch();

  const getStories = useCallback(
    () => dispatch(action.getStoriesList(id, keyword, status, type, page)),
    // eslint-disable-next-line
    [dispatch, keyword, status, type, page],
  );

  const getMemberList = useCallback(
    () => dispatch(memberAction.getMemberList(id, memberKeyword, role, 1)),
    [dispatch, id, memberKeyword, role],
  );

  const resetPage = () => dispatch({type: 'RESET_MODULE'});

  const createStory = (story: object) =>
    dispatch(action.createStory(id, story));

  const addOwner = (storyID: string, owner: any) =>
    dispatch(action.addOwner(storyID, owner));

  const editStory = (id: string, story: object) =>
    dispatch(action.editStory(id, story));

  const editStatus = (id: string, story: object) =>
    dispatch(action.editStatus(id, story));

  const deleteStory = (storyID: string) =>
    dispatch(action.deleteStory(id, storyID));

  const removeOwner = (storyID: string, owner: any) =>
    dispatch(action.deleteOwner(storyID, owner));

  const stories = useSelector(
    (state: RootStateOrAny) => state.storiesReducer.payload,
  );

  const members = useSelector(
    (state: RootStateOrAny) => state.memberReducer.filterList,
  );

  const total = useSelector(
    (state: RootStateOrAny) => state.storiesReducer.total,
  );

  const loading = useSelector(
    (state: RootStateOrAny) => state.storiesReducer.loading,
  );

  const message = useSelector(
    (state: RootStateOrAny) => state.storiesReducer.message,
  );

  const err = useSelector((state: RootStateOrAny) => state.storiesReducer.err);

  const totalPage = Math.round(total / 6);

  useEffect(
    () => {
      resetPage();
      setPage(1);
    },
    // eslint-disable-next-line
    [keyword, status, type],
  );

  useEffect(() => {
    getStories();
  }, [getStories]);

  useEffect(() => {
    getMemberList();
  }, [getMemberList]);

  const renderModal = () => {
    return (
      <CreateStory
        getMember={getMemberList}
        data={members}
        search={setMemberKeyword}
        head="Create"
        foot="Create"
        createStory={createStory}
        hide={() => {
          setShow(false);
          setMemberKeyword('');
        }}
      />
    );
  };

  return (
    <DashboardTemplate
      button={
        <Button
          onOK={() => {
            setShow(true);
          }}
        >
          Create
        </Button>
      }
      head="User stories"
    >
      {show ? renderModal() : null}
      <StoriesDashboard
        next={() => {
          return page < totalPage ? setPage(page + 1) : null;
        }}
        first={() => {
          setPage(1);
        }}
        removeOwner={removeOwner}
        addOwner={addOwner}
        err={err}
        memberList={members}
        memberSearch={setMemberKeyword}
        members={members}
        message={message}
        deleteStory={deleteStory}
        edit={editStory}
        setType={setType}
        setTus={setStatus}
        editStatus={editStatus}
        total={total}
        search={setKeyword}
        load={loading}
        data={stories}
      />
    </DashboardTemplate>
  );
};

export default Stories;
