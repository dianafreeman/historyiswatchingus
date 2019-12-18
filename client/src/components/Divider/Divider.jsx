import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapImage = styled.img`
  position: absolute;
  right: 0px;
  left: 0px;
  ${props => `${props.yPos}`}: 0px;
`;

const Divider = ({ config = { xPos: 'left', yPos: 'bottom', variant: 'cool'}, ...rest }) => {
  const extractSrc = ({ variant, xPos }) => {
    return `./assets/graphics/dividers/divider-${variant}-${xPos}.svg`;
  };
  return <WrapImage src={extractSrc(config)} yPos={config.yPos} {...rest} />;
};

Divider.propTypes = {

};

export default Divider;
