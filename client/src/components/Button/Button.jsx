import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import { colors } from '../../config/tailwind/vars';

export const Wrapper = styled.button`
  ${tw`rounded-lg p-3 font-bold`};
  outline: none;
  font-size: 100%;
  background-color: ${props => colors[props.variant]};
  border: 2px solid ${props => colors[props.variant]};
  &:hover,
  &:active,
  &:focus {
    background-color: ${props => colors[`${props.variant}-dark`]};
  
}
`;

const Button = ({ variant = 'primary', children, ...rest }) => {
    return (
    <Wrapper variant={variant} {...rest}>
      {children}
    </Wrapper>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
};

Button.defaultProps = {};

export default Button;
