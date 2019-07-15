import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { checkCircle } from 'react-icons-kit/feather/checkCircle';
import './Success.css';

/*
 * Dialog indicating everything went well
*/
const Success = (props) => {
  const { visible, message } = props;
  return (
    <div className={visible ? 'auth__success' : 'hidden'}>
      <div className="auth__success__icon">
        <Icon size="100%" icon={checkCircle} />
      </div>
      <div>{message}</div>
    </div>
  );
};

Success.propTypes = {
  message: PropTypes.string,
  visible: PropTypes.bool,
};

Success.defaultProps = {
  message: '',
  visible: false,
};

export default Success;