import React, { Component } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Select from 'react-select';
import { US_STATES } from '../../constants';
import { colors, screens } from '../../tailwind.config';
import CompassIcon from '../../icons/compass.svg';
import CompassGrayIcon from '../../icons/compass_gray.svg';

const selectStyles = {
  option: (provided, state) => ({
    // ...provided,
    backgroundColor: state.showSelected
      ? colors['brand-dark-red']
      : colors['brand-medium-gray'],
  }),
  container: (provided, state) => ({
    ...provided,
    width: '100%',
  }),
  menu: (provided, state) => ({
    // ...provided,
    fontSize: 'inherit',
    lineHeight: '1.5em',
    color: state.isSelected && colors['brand-dark-red'],
  }),
  control: (provided, state) => ({
    display: 'flex',
    color: colors['white'],
    backgroundColor: 'transparent',
    color: colors['brand-dark-red'],
  }),
  placeholder: (provided, state) => ({
    color: colors['brand-dark-red'],
    fontSize: 'inherit',
  }),
  singleValue: (provided, state) => ({
    fontFamily: 'Prata',
    width: '100%',
    color: colors['brand-dark-red'],
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    color: state.showSelect
      ? colors['brand-dark-red']
      : colors['brand-dark-gray'],
  }),
  indicator: (provided, state) => ({
    ...provided,
    display: 'inline-flex',
    color: state.showSelect ? colors['brand-dark-red'] : colors['black'],
  }),
  input: (provided, state) => ({
    ...provided,
    display:'none',
  }),
};
export const ActionButton = styled.button`
  ${tw`py-1 w-2/3 rounded-lg bg-brand-deep-red border-brand-deep-red border-4 text-brand-white`}
  font-family: "Prata" !important;
  font-weight: 400;
  text-align: left;
  font-size: 1.5em;
  line-height: 3em;
`;

export const SelectWrapper = styled.div`
  width: inherit;
  margin: auto;
`;

export const LocationText = styled.p`
  ${tw`text-left m-0`}
  font-size: 24px;
  line-height: 3em;

`;

export const ButtonIcon = styled.img`
  ${tw`h-auto float-left mr-4`}
@media screen and (min-width: ${screens.md}){
  width: 90px;
  height: auto;
}
  `;
const stateOptions = Object.entries(US_STATES).map(o => ({
  value: o[0],
  label: o[1],
}));

class StateSelect extends Component {
  state = {
    showSelect: this.props.showSelect || false,
    isHovered: this.props.isHovered || false,
  };

  toggleHover = () =>
    this.setState(prevState => ({ isHovered: !prevState.isHovered }));
  componentDidMount() {
    this.selectElRef = React.createRef();
    this.buttonELRef = React.createRef();
  }

  onClick = e => {
    if (
      !this.selectElRef.current ||
      !(this.selectElRef.current && this.selectElRef.current.state.menuIsOpen)
    ) {
      this.setState(prevState => ({ showSelect: !prevState.showSelect }));
    }
    return;
  };

  onChange = async location => {
    this.props.store.setLocation(location);
    this.setState({ showSelect: false });

    try {
      const req = await fetch(`reps/${location.value}`);
      const response = await req.json();
      this.props.store.setReps(response.reps);
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  };
  render() {
    return (
      <>
        <ActionButton
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          ref={this.buttonELRef}
          onClick={this.onClick}
        >
          <ButtonIcon
            src={this.props.store.location ? CompassIcon : CompassGrayIcon}
            style={{ width: '3em' }}
          />

          <SelectWrapper>
            {this.state.showSelect ? (
              <Select
                {...this.props.selectProps}
                styles={selectStyles}
                ref={this.selectElRef}
                placeholder={<LocationText>Choose a state</LocationText>}
                options={stateOptions}
                onChange={this.onChange}
                defaultValue={this.props.store.location}
              />
            ) : this.props.store.location ? (
              <LocationText>
                You chose{' '}
                <span style={{ fontWeight: '900' }}>
                  {this.props.store.location.label}
                </span>
              </LocationText>
            ) : (
              <LocationText>Choose a state</LocationText>
            )}
          </SelectWrapper>
        </ActionButton>
      </>
    );
  }
}

export default observer(StateSelect);
