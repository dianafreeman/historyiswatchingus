import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Wrapper = styled.button`
    ${tw`rounded-lg p-3 outline-none`};
&:hover, &:active, &:focus{
    
}
    ${tw`bg-gray hover:bg-gray-dark `}
    text-white border-transparent hover:bo
    font-size: 100%;
`


const Button = () => <Wrapper>Look Ma, a button</Wrapper>

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
