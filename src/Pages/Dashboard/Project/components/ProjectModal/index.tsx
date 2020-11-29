import React, {FC, useEffect, useState} from 'react';

import Button from '../../../../../Components/Button';

import Checkbox from '../../../../../Components/Checkbox';

import Input from '../../../../../Components/Input';
import Text from '../../../../../Components/Input/text';

import Modal from '../../../../../Components/Modal';
import Debounce from '../../../../../Helper/debounce';
import {Validate} from '../../../../../Validation';

import styles from './projectmodal.module.css';

interface ModalProps {
  setHide?: any;
  create?: any;
}

const ProjectModal: FC<ModalProps> = ({setHide, create}) => {
  const [project, setProject] = useState({
    name: '',
    description: '',
    is_public: false,
  });

  const [projectErr, setProjectErr] = useState({
    name: '',
    description: '',
  });

  let [formValid, setFormValid] = useState(false);

  let [nameValid, setNameValid] = useState(false);

  let [descriptionValid, setDescriptionValid] = useState(false);

  useEffect(() => {
    setFormValid(nameValid && descriptionValid);
  }, [nameValid, descriptionValid]);

  const handleErrorCase = Debounce((name: string, value: any) => {
    let message;
    switch (name) {
      case 'name':
        if (Validate(value.trim(), 80)) {
          setNameValid(false);
          message = Validate(value.trim(), 80);
        }
        setNameValid((nameValid = message ? false : true));
        break;

      case 'description':
        if (Validate(value.trim(), 5000)) {
          setDescriptionValid(false);
          message = Validate(value.trim(), 5000);
        }
        setDescriptionValid((descriptionValid = message ? false : true));
        break;

      default:
        return 'Invalid';
    }

    setProjectErr({...projectErr, [name]: message});
  }, 500);

  const handleTyping = (e: any) => {
    let {name, value} = e.target;
    setProject({...project, [name]: value});
    handleErrorCase(name, value);
  };

  const handleCheck = (e: any) => {
    const {checked} = e.target;
    setProject({...project, is_public: checked});
  };

  const renderModal = () => {
    return (
      <Modal
        head="Create project"
        cancel={setHide}
        content={
          <div className={styles.container}>
            <div className={styles.name}>
              <Input
                errorNoti={projectErr.name}
                onChange={handleTyping}
                autoComplete="off"
                name="name"
                label="Project name"
                placeholder="Type project name"
              />
            </div>
            <div className={styles.description}>
              <Text
                errorNoti={projectErr.description}
                onChange={handleTyping}
                autoComplete="off"
                name="description"
                label="Description"
              />
            </div>
            <div className={styles.status}>
              <Checkbox
                onChange={handleCheck}
                title="Private"
                note="Only people invited to the project can access it"
              />
            </div>
          </div>
        }
        foot={
          <Button
            onOK={() => {
              create({
                name: project.name,
                description: project.description,
                is_public: !project.is_public,
              });
              setHide();
            }}
            disabled={!formValid}
          >
            Create
          </Button>
        }
      />
    );
  };

  return <div>{renderModal()}</div>;
};

export default ProjectModal;
