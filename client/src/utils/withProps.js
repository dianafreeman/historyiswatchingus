import React from 'react'

const withProps = (Component, props) => otherProps => (
  <Component {...props} {...otherProps} />
);

export default withProps;
