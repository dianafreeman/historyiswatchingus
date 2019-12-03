import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { colors } from '../../../config/tailwind/vars';
// import { colors } from '../config/tailwind/vars';

const Wrapper = styled.div`
  ${tw`px-2 py-1`}
  display: inline-flex;
  min-width: 60px;
  border-radius: 5px;
  ${props => props.variant && 
  `background-color: ${colors[props.variant]} ;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;`
}
  
  img {
    max-width: 60px;
    height: initial;
    vertical-align: top;
  }
`;

const ButtonIcon = ({ variant = 'red', wrapperStyles = {},...restProps}) => (
  <Wrapper
    style={{...wrapperStyles}}
    variant={variant}
  >
    <img {...restProps} />
  </Wrapper>
);
export default ButtonIcon;
