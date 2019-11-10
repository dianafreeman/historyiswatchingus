import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { FaMapPin } from 'react-icons/fa';
import Select from 'react-select';
import { US_STATES } from '../../constants';
import { colors } from '../../tailwind.config';
import {
  Content,
  LocationText,
  SelectWrapper,
  ActionButton,
  ButtonIcon,
} from './styles';
import CompassIcon from '../../icons/compass.svg';
import CompassGrayIcon from '../../icons/compass_gray.svg';

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

  selectStyles = {
    option: (provided, state) => ({
      // ...provided,
      backgroundColor: state.showSelected
        ? colors['brand-dark-red']
        : colors['brand-medium-gray'],
      color: colors['brand-dark-red'],
      fontFamily: 'Prata',
      textAlign: 'left',
      marginTop: '1em',
      marginBottom: '1em',
    }),
    container: (provided, state) => ({
      ...provided,
      width: '100%',
    }),
    menu: (provided, state) => ({
      // ...provided,
      color: state.isSelected && colors['brand-dark-red'],
    }),

    control: (provided, state) => ({
      display: 'flex',
      color: colors['white'],
      backgroundColor: 'transparent',
      color: colors['brand-dark-red'],
    }),
    placeholder: (provided, state) => ({
      ...provided,
      fontFamily: 'Prata',
      textAlign: 'left',
      color: colors['brand-dark-red'],
    }),
    singleValue: (provided, state) => ({
      ...provided,
      fontFamily: 'Prata',
      width:'100%',
      textAlign: 'left',
      fontWeight: '700',
      fontSize: '1.5em',
      color: colors['brand-dark-red'],
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      fontFamily: 'Prata',
      color: state.showSelect
        ? colors['brand-dark-red']
        : colors['brand-dark-gray'],
    }),
    indicator: (provided, state) => ({
      ...provided,
      fontFamily: 'Prata',
      display: 'inline-flex',
      color: state.showSelect ? colors['brand-dark-red'] : colors['black'],
    }),
  };
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
      <Content>
        <ActionButton
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          ref={this.buttonELRef}
          onClick={this.onClick}
        >
          <ButtonIcon src={ this.props.store.location ? CompassIcon : CompassGrayIcon } style={{width: '10vw'}}/>
      
          <SelectWrapper>
            {this.state.showSelect ? (
              <Select
                {...this.props.selectProps}
                styles={this.selectStyles}
                ref={this.selectElRef}
                placeholder={<LocationText>Choose a state....</LocationText>}
                options={stateOptions}
                onChange={this.onChange}
                defaultValue={this.props.store.location}
              />
            ) : this.props.store.location ? (
              <LocationText>
                You chose {this.props.store.location.label}
              </LocationText>
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
