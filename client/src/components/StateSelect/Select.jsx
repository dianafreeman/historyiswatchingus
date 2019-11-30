import React from 'react';
import { default as ReactSelect } from 'react-select';
import useSpring from 'react-spring';
import { color, screens } from '../../config/tailwind/vars';
import US_STATES from '../../constants/content/usStates';

const stateOptions = Object.entries(US_STATES).map(o => ({
  value: o[0],
  label: o[1],
}));

const styles = {
  container: provided => ({
    ...provided,
    width: '100%',
    color: 'black',
    background: 'transparent',
  }),
  control: provided => ({
    ...provided,
    color: 'black',
    background: 'transparent',
    border: 'none',
    fontSize: '1.5em',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: 'white',
  }),
  group: provided => ({
    color: 'black',
  }),
  groupHeading: provided => ({
    // ...provided,
  }),
  indicatorsContainer: provided => ({
    // ...provided,
    fontSize: '3em',
  }),
  indicatorSeparator: provided => ({
    // ...provided,
  }),
  input: provided => ({
    ...provided,
    backgroundColor: 'transparent',
    padding: '0.5em 0',
  }),
  menu: provided => ({
    ...provided,
    textAlign: 'left',
    // backgroundColor: colors['red-dark'],
    // position: 'absolute',
    // left: '1em',
    // top: '0px',
    // padding: '0 2em'
  }),
  menuList: provided => ({
    ...provided,
    // backgroundColor: colors['red-dark'],
    // padding: '3em 2em'
  }),
  placeholder: provided => ({
    ...provided,
    color: 'white',
    fontStyle: 'italic',
  }),
  singleValue: provided => ({
    ...provided,
    color: 'black',
  }),
  valueContainer: provided => ({
    ...provided,
    color: 'black',
  }),
};

const Select = ({ options, ...rest }) => {
  return <ReactSelect 
 
  styles={styles} 
  options={stateOptions} {...rest} />;
};
export default Select;
