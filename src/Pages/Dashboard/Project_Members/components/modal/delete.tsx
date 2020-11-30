import React, {FC} from 'react';

import Button from '../../../../../Components/Button';

import Modal from '../../../../../Components/Modal';

import {Body} from '../../../../../Components/Typography';

interface Props {
  hide?: any;
}

const MemberDeleteModal: FC<Props> = ({hide}) => {
  return (
    <Modal
      cancel={() => hide()}
      error
      head="Remove member"
      foot={<Button error>Remove</Button>}
      content={
        <Body>
          Are you sure you want to remove "<strong>Tupac</strong>" from the
          "Company Website"?
        </Body>
      }
    />
  );
};

export default MemberDeleteModal;
