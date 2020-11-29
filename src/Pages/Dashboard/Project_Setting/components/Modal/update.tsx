import React, {FC, useEffect, useState} from 'react';

import Button from '../../../../../Components/Button';

import Checkbox from '../../../../../Components/Checkbox';

import Input from '../../../../../Components/Input';

import Text from '../../../../../Components/Input/text';

import Modal from '../../../../../Components/Modal';

import Debounce from '../../../../../Helper/debounce';

import {Validate} from '../../../../../Validation';

import styles from './modal.module.css';

interface Props {
  hide?: any;
  project?: any;
  updateProject?: any;
}

const UpdateModal: FC<Props> = ({project, hide, updateProject}) => {
  const [updateValid, setUpdateValid] = useState(false);

  const [projectObj, setProjectObj] = useState({
    name: project.name,
    description: project.description,
    is_public: !project.is_public,
  });

  const [projectErr, setProjectErr] = useState({
    name: '',
    description: '',
  });

  let [nameValid, setNameValid] = useState(false);

  let [descriptionValid, setDescriptionValid] = useState(false);

  useEffect(() => {
    if (projectErr.description === '' && projectErr.name === '') {
      setUpdateValid(nameValid || descriptionValid);
    } else {
      setUpdateValid(false);
    }
  }, [projectErr, nameValid, descriptionValid]);

  const handleErrorCase = (name: string, value: string) => {
    let message = '';
    switch (name) {
      case 'name':
        if (Validate(value.trim(), 80) !== '') {
          setNameValid(false);
          message = Validate(value.trim(), 80);
        }
        setNameValid((nameValid = message ? false : true));
        break;
      case 'description':
        if (Validate(value.trim(), 5000) !== '') {
          setDescriptionValid(false);
          message = Validate(value.trim(), 5000);
        }
        setDescriptionValid((descriptionValid = message ? false : true));
        break;
    }
    setProjectErr({...projectErr, [name]: message});
  };

  const handleType = Debounce((e: any) => {
    const {name, value} = e.target;
    setProjectObj({...projectObj, [name]: value});
    handleErrorCase(name, value);
  }, 200);

  const handleCheck = (e: any) => {
    const {checked} = e.target;
    setProjectObj({...projectObj, is_public: checked});
    setUpdateValid(true);
  };

  return (
    <Modal
      cancel={hide}
      head="Update project"
      foot={
        <Button
          onOK={() => {
            updateProject(project.project_id, {
              name: projectObj.name,
              description: projectObj.description,
              is_public: !projectObj.is_public,
            });
            hide();
          }}
          disabled={!updateValid}
        >
          Update
        </Button>
      }
      content={
        <div className={styles.content}>
          <div className={styles.name}>
            <Input
              name="name"
              onChange={handleType}
              label="Project name"
              placeholder="Type name"
              errorNoti={projectErr.name}
              defaultValue={project.name}
            />
          </div>
          <div className={styles.description}>
            <Text
              name="description"
              onChange={handleType}
              label="Description"
              errorNoti={projectErr.description}
              defaultValue={project.description}
            />
          </div>
          <div className={styles.status}>
            <Checkbox
              onChange={handleCheck}
              defaultChecked={!project.is_public}
              title="Private"
              note="Only people invited to the project can access it"
            />
          </div>
        </div>
      }
    />
  );
};

export default UpdateModal;
