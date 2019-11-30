import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

const COMPONENT_NAME = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

COMPONENT_NAME.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired
};
