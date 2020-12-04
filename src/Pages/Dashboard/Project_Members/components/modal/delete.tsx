import React, {FC} from 'react';

import Button from '../../../../../Components/Button';

import Modal from '../../../../../Components/Modal';

import {Body} from '../../../../../Components/Typography';

interface Props {
  hide?: any;
  member?: any;
}

const MemberDeleteModal: FC<Props> = ({member, hide}) => {
  let project: any;

  const storage = localStorage.getItem('project');

  if (storage) {
    project = JSON.parse(storage);
  }

  return (
    <Modal
      cancel={() => hide()}
      error
      head="Remove member"
      foot={<Button error>Remove</Button>}
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
