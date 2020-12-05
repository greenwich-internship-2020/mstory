import React, {FC} from 'react';

import Button from '../../../../../Components/Button';

import Modal from '../../../../../Components/Modal';

import {Body} from '../../../../../Components/Typography';

interface Props {
  hide?: any;
  member?: any;
  removeMember?: any;
}

const MemberDeleteModal: FC<Props> = ({member, hide, removeMember}) => {
  let project: any;

  const storage = localStorage.getItem('project');

  if (storage) {
    project = JSON.parse(storage);
  }

  const handleRemove = () => {
    removeMember(project.id, member.user_id);
    hide();
  };

  return (
    <Modal
      cancel={() => hide()}
      error
      head="Remove member"
      foot={
        <Button onOK={handleRemove} error>
          Remove
        </Button>
      }
      content={
        <Body>
          Are you sure you want to remove "<strong>{member.fullname}</strong>"
          from the "{project.name}"?
        </Body>
      }
    />
  );
};

export default MemberDeleteModal;
