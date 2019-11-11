import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { animated } from 'react-spring';

const SpringWrapper = ({ isOpen, children}) => (
  <Spring
    from={{
      left: 1,
      bottom: 1,
      right: 999,
      top: 999,
    }}
    to={{
      left: 1,
      bottom: 1,
      right: isOpen ? 1 : 999,
      top: isOpen ? 1 : 999,
    }}
  >
    {props => <animated.div {...props} >{children}</animated.div>}
  </Spring>
);

SpringWrapper.propTypes = {};

SpringWrapper.defaultProps = {};

export default SpringWrapper;
