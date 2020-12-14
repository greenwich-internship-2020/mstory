import React, {FC} from 'react';
import Button from '../../../Components/Button';
import Form from '../../../Components/Form';
import Input from '../../../Components/Input';

// import robot from '../../../assets/robot.svg';

import styles from './forgot.module.css';

interface Props {}

const Forgot: FC<Props> = (props) => {
  return (
    <div className={styles.wrap}>
      {/* <div className={styles.img}>
        <img alt="robot" src={robot} />
      </div> */}
      <Form head="Forgot password">
        <Input label="Email" type="email" placeholder="Type email address" />
        <div className={styles.button}>
          <Button>Confirm</Button>
        </div>
      </Form>
    </div>
  );
};

export default Forgot;
