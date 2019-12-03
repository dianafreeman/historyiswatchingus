import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../config/tailwind/vars'

const Wrapper =  styled.div`
position: relative;
width: 100%;
height: inherit;
border-radius: inherit;
${props => props.hasSibling && `
border-top-left-radius: 0px !important;
border-bottom-left-radius: 0px !important;`
}
background-color: ${colors.lightest} !important;
&::before{
    content: '';
    position: absolute;
    border-radius: inherit;
    background-color: ${colors['red-dark']};
    height: calc(100% + 1em);
    width: calc(100% - 2.5em);
    left: 3em;
    top: -1em;
}
`;

const SelectContainer = ({children, innerRef, innerProps } ) => <Wrapper ref={innerRef} {...innerProps}>{children}</Wrapper>

export default SelectContainer