import React, { Component } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
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
`;
const stateOptions = Object.entries(US_STATES).map(o => ({
  value: o[0],
  label: o[1],
}));

const SelectStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.showSelected
      ? colors['theme-dark-red']
      : colors['theme-medium-gray'],
    color: colors['theme-dark'],
    fontFamily: 'Open Sans',
    fontWeight: '100',
  }),
  control: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid dark',
    color: colors['theme-dark'],
  }),
  placeholder: provided => ({
    ...provided,
  }),
  singleValue: provided => ({
    ...provided,
  }),
};
class StateSelect extends Component {
  state = {
    showSelect: false,
  };

  componentDidMount() {
    this.selectElRef = React.createRef();
    this.buttonELRef = React.createRef();
  }

  onClick = e => {
    if (!this.selectElRef.current || 
      !(this.selectElRef.current &&
        this.selectElRef.current.state.menuIsOpen)) {
      this.setState(prevState => ({ showSelect: !prevState.showSelect }));
    } 
    return
  };

  onChange = async location => {
    this.props.store.setLocation(location)
    this.setState({ showSelect: false });

    try {
      const req = await fetch(`reps/${location.value}`)
      const response = await req.json()
      this.props.store.setReps(response.reps)
      // console.log(response.reps)
    } catch (err) {
      console.log(`ERROR: ${err}`)
    }
    // .finally(console.log(JSON.stringify(this.props.store.representatives)))
  };
  render() {
    return (
      <Content>
        <ActionButton ref={this.buttonELRef} onClick={this.onClick}>
          <FaMapPin
            style={{
              color: 'inherit',
              fontSize: '3em',
              float: 'left',
              margin: 'auto',
            }}
          />
          <SelectWrapper>
            {this.state.showSelect ? (
              <Select
              styles={SelectStyles}
                onClick={() => this.setState({ selectIsActive: true })}
                ref={this.selectElRef}
                placeholder="choose a state...."
                options={stateOptions}
                onChange={this.onChange}
                defaultValue={this.props.store.location}
              />
            ) : this.props.store.location ? (
              <LocationText>You chose {this.props.store.location.label}</LocationText>
            ) : (
              <LocationText>Choose a state</LocationText>
            )}
          </SelectWrapper>
        </ActionButton>
      </Content>
    );
  }
}

export default observer(StateSelect);
