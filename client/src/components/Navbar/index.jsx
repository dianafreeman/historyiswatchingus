import React, { Component } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { colors } from '../../tailwind.config'


const NavWrapper = styled.nav`
  ${tw`w-full flex relative font-sans py-5`}
  background-color: ${props => props.isActive ? colors['brand-deep-red'] : colors['brand-medium-gray']}
  color: ${props => props.isActive ? colors['brand-white'] : colors['brand-light-gray']}
`;

const NavBrand = styled.div`
  ${tw`w-1/2`}
`;

const LinkWrapper = styled.div`
    ${tw`w-1/2 text-right`}
`
const NavLink = styled.a`
    ${tw`mx-2`}
`


class Navbar extends Component {
  state = {
    isActive: false,
  };

  render() {
    return (
      <NavWrapper
        onMouseEnter={() => this.setState({ isActive: true })}
        onMouseLeave={() => this.setState({ isActive: false })}
      isActive={this.state.isActive}
      >
        <NavBrand>History Is Watching Us</NavBrand>
        <LinkWrapper>
        <NavLink>Privacy Policy</NavLink>
        <NavLink>Credits</NavLink>
        <NavLink>Donate</NavLink>
        </LinkWrapper>
      </NavWrapper>
    );
  }
}

export default Navbar;
