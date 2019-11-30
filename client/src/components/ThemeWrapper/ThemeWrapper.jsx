import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

const Wrapper = styled.div``;

const ThemeWrapper = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

ThemeWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired
};
