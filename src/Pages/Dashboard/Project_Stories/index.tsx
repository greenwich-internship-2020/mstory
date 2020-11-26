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
    [id, keyword, status, type, page],
  );

  const stories = useSelector(
    (state: RootStateOrAny) => state.storiesReducer.payload,
  );

  const loading = useSelector(
    (state: RootStateOrAny) => state.storiesReducer.loading,
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
      <StoriesDashboard load={loading} data={stories} />
    </DashboardTemplate>
  );
};

export default Stories;
