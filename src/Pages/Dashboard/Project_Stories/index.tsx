import React, {FC, useCallback, useEffect, useState} from 'react';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import Button from '../../../Components/Button';
import DashboardTemplate from '../../../Components/Template/dashboard';
import StoriesDashboard from './components/dashboard';
import CreateStory from './components/modal/create';

import * as action from '../../../Redux/Stories/action';
import {useParams} from 'react-router-dom';

interface Props {}

interface ParamTypes {
  id: string;
}

const Stories: FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  const [page, setPage] = useState(1);

  const [keyword, setKeyword] = useState('');

  const [status, setStatus] = useState('');

  const [type, setType] = useState('');

  const {id} = useParams<ParamTypes>();

  const dispatch = useDispatch();

  const getStories = useCallback(
    () => dispatch(action.getStoriesList(id, keyword, status, type, page)),
    // eslint-disable-next-line
    [dispatch, keyword, status, type, page],
  );

  const stories = useSelector(
    (state: RootStateOrAny) => state.storiesReducer.payload,
  );

  const total = useSelector(
    (state: RootStateOrAny) => state.storiesReducer.total,
  );

  const filterList = useSelector(
    (state: RootStateOrAny) => state.storiesReducer.filterList,
  );

  const loading = useSelector(
    (state: RootStateOrAny) => state.storiesReducer.loading,
  );

  const resetPage = () => dispatch({type: 'RESET_MODULE'});

  const totalPage = Math.round(total / 6);

  useEffect(
    () => {
      resetPage();
    },
    // eslint-disable-next-line
    [status, type],
  );

  useEffect(() => {
    getStories();
  }, [getStories]);

  const renderModal = () => {
    return (
      <CreateStory
        hide={() => {
          setShow(false);
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
          return page <= totalPage ? setPage(page + 1) : null;
        }}
        first={() => {
          setPage(1);
        }}
        setType={setType}
        setTus={setStatus}
        total={total}
        search={setKeyword}
        load={loading}
        data={keyword === '' ? stories : filterList}
      />
    </DashboardTemplate>
  );
};

export default Stories;
