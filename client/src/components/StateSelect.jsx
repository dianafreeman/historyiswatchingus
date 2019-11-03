import React, { Component } from 'react';
import styled from 'styled-components';
import { FaMapPin } from 'react-icons/fa';
import Select from 'react-select';
import tw from 'tailwind.macro';
import { US_STATES } from '../constants';
import { colors } from '../tailwind.config';

const Content = styled.div`
  ${tw`px-2 my-3 mx-5`}
`;

const ActionButton = styled.button`
  ${tw`p-5 flex w-1/4 rounded-lg bg-theme-deep-red border-theme-deep-red border-4 font-sans border-solid text-theme-white`}
  &:hover, &:focus {
    outline: none;
    ${tw`border-theme-deep-red bg-theme-white text-theme-deep-red`}
  }
`;

const SelectWrapper = styled.div`
  ${tw`w-full`}
`;

const LocationText = styled.p`
  ${tw`font-bold font-serif text-2xl m-auto`}
`
const stateOptions = Object.entries(US_STATES).map(o => ({
  value: o[0],
  label: o[1],
}));

// const SelectStyles = {
//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: state.showSelected
//       ? colors['theme-dark-red']
//       : colors['theme-medium-gray'],
//     color: colors['theme-dark'],
//     fontFamily: 'Open Sans',
//     fontWeight: '100',
//   }),
//   control: () => ({
//     // none of react-select's styles are passed to <Control />
//     width: 200,
//     borderBottom: '1px solid dark',
//     display: 'flex',
//     color: colors['theme-dark'],
//     fontFamily: 'Open Sans',
//     fontWeight: '100',
//   }),
//   placeholder: () => ({
//     color: colors['theme-dark'],
//     fontSize: '1.5em',
//     fontFamily: 'Open Sans',
//     fontWeight: '100',
//   }),
//   singleValue: () => ({
//     color: colors['theme-dark'],
//     fontSize: '1.5em',
//     fontFamily: 'Open Sans',
//     fontWeight: '100',
//   }),
// };
class StateSelect extends Component {
  state = {
    location: null,
    showSelect: false,
    selectIsActive: false,
  };

  componentDidMount() {
    this.selectElRef = React.createRef();
    this.buttonELRef = React.createRef();
  }

  onClick = e => {
    if (!this.selectElRef.current){
    this.setState(prevState =>( {showSelect: !prevState.showSelect }))
    } else if (this.selectElRef.current && this.selectElRef.current.state.menuIsOpen){
      return 
    } else {
      this.setState(prevState =>( { showSelect: !prevState.showSelect }))
    }
  };


  onChange = location => {
    this.setState({ location, showSelect: false });
  };
  render() {
    return (
      <Content>
        <ActionButton ref={this.buttonELRef} onClick={this.onClick}>
          <FaMapPin
            style={{
              color: 'inherit',
              fontSize: '2em',
              float: 'left',
              margin: 'auto',
            }}
          />
         <SelectWrapper >
          
            {  this.state.showSelect ? <Select
                onClick={ () => this.setState({selectIsActive: true})}
                ref={this.selectElRef}
                placeholder="choose a state...."
                options={stateOptions}
                onChange={this.onChange}
                defaultValue={this.state.location}
           /> :  this.state.location ? <LocationText>You chose {this.state.location.label}</LocationText> : <LocationText>Choose a state</LocationText> }
           </SelectWrapper> 
        </ActionButton>
      </Content>
    );
  }
}

export default StateSelect;
