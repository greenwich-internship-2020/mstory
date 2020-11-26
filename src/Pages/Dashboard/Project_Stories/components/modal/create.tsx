import React, {FC} from 'react';
import Button from '../../../../../Components/Button';
import Modal from '../../../../../Components/Modal';

interface Props {
  hide?: any;
}

const CreateStory: FC<Props> = ({hide}) => {
  return (
    <Modal
      cancel={hide}
      head="Create user story"
      foot={<Button>Create</Button>}
    />
  );
};

export default CreateStory;
