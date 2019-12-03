import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import { colors } from '../../../config/tailwind/vars';
import styled from 'styled-components';

const Wrapper = styled.div`
height: 280px;
width: 100%;
padding-left: 2em;
padding-right: 2em;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
`
const Menu = ({ children, innerRef, innerProps }) => {
  return <Wrapper ref={innerRef} {...innerProps}>{children}</Wrapper>;
};

Menu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired
};


export default Menu