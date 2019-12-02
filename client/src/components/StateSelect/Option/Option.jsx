import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import US_STATES from '../../../constants/content/usStates';
import tw from 'tailwind.macro';
import { colors } from '../../../config/tailwind/vars';

export const StateOptions = Object.entries(US_STATES).map(o => ({
  value: o[0],
  label: o[1],
}));

const OptionWrap = styled.div`
${tw`font-bold py-2 m-1 mr-4 ml-1 pl-6 text-left text-md`}
color: ${colors["grey"]};
position: relative;
left: 1em;
label {
  font-size: 1.25em;
  line-height: inherit;
  padding-bottom : 1em;
}
&::before {
  content: '';
  position: absolute;
  left: 0em;
  width: 100%;
  top: -0.5em;
  height: calc(100% + 1em);
  border-radius: 5px;
  background-color: ${colors['red']};
  box-shadow: 4px 5px 3px 3px ${colors['navy-dark']}33;
  opacity: 0;
  z-index: -1;
}
&:hover,
&:active,
&:focus {
  z-index: 999;
  color: ${colors["white"]};
  transform: translate(-5px, -5px);
  &::before {
    transform: translate(-5px, -5px);
    opacity: 1;
  }
}
`;
const AniOptionWrap = animated(OptionWrap)

const Option = ({ children, innerRef, innerProps }) => {
  const [isHovered, setHovered] = useState(false);
  const { transform, opacity } = useSpring({
    color: isHovered ? colors.white : colors.grey ,
    transform: `translate(${isHovered ? '-5' : '0'}px, ${isHovered ? '-5' : '0'}px )`,
  })

  return (
    <AniOptionWrap onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} ref={innerRef} {...innerProps} style={{transform, opacity}}>
     <label>{children}</label> 
    </AniOptionWrap>
  );
};

// Option.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
// };

export default Option;
