import React, {FC, ReactNode, useEffect, useRef} from 'react';

import {createPortal} from 'react-dom';
import Button from '../Button';

import styles from './modal.module.css';

const modal = document.getElementById('modal') as HTMLElement;

interface ModalProps {
  element?: any;
  head?: ReactNode;
  content?: ReactNode;
  foot?: ReactNode;
  error?: boolean;
  cancel?: any;
  infoHead?: string;
  infoDetail?: string;
  thirdFoot?: ReactNode;
}

const Modal: FC<ModalProps> = ({
  element,
  cancel,
  head,
  content,
  error,
  infoHead,
  infoDetail,
  thirdFoot,
  foot,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      cancel();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  const renderModal = () => {
    return (
      <div className={styles.modalWrapper}>
        <div ref={ref} className={styles.modal}>
          <div className={styles.head}>
            <div className={styles.title}>{head}</div>
            <div className={styles.info}>
              <p className={styles.infoHead}>{infoHead}</p>
              <p className={styles.infoDetail}>{infoDetail}</p>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.content}>{content}</div>
            <div className={styles.foot}>
              <div className={styles.footLeft}>{thirdFoot}</div>
              <div className={styles.footRight}>
                <div className={styles.cancel}>
                  <Button error={error} onCancel={cancel} ghost>
                    Cancel
                  </Button>
                </div>
                {foot}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const [container] = React.useState(() => {
    const el = document.createElement(element);
    return el;
  });

  React.useEffect(() => {
    modal.appendChild(container);
    return () => {
      modal.removeChild(container);
    };
  }, [container]);

  return createPortal(renderModal(), container);
};

export default Modal;
