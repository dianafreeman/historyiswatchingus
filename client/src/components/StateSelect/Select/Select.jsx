import React, { useRef } from 'react';
import { default as ReactSelect } from 'react-select';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { colors } from '../../../config/tailwind/vars';
import Option from '../Option';
import Menu from '../Menu';
import SelectContainer from './Container';
/* TO DO

styled DROPDOWN INDICATOR

*/

const SelectWrapper = styled.div`
  ${tw`w-2/3 rounded-lg border-full flex`}
  display: inherit;
  position: relative;
  font-weight: 600;
  display: flex;
  background-color: ${colors.red};
  ${props =>
    props.hasSibling &&
    `
  border-top-left-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  
  `}
`;

// const IndicatorContainer = styled.div``;
const styles = {
  // container: () => ({
  //   width: '100%',
  //   position: 'absolute',
  //   backgroundColor: colors.transparent,
  //   borderRadius: 'inherit',
  // }),
  control: (provided, state) => {
    return {
      ...provided,
      width: '100%',
      backgroundColor:
        (state.isFocused && !state.hasValue) || state.menuIsOpen
          ? colors.white
          : colors.red,
      border: 'none',
      fontSize: '1.5em',
      outline: 'none',
      border: 'none',
      borderBottomLeftRadius: '0px',
      borderTopLeftRadius: '0px',
    };
  },
  dropdownIndicator: provided => ({
    ...provided,
    color: 'white',
  }),
  input: (provided, state) => {
    return {
      ...provided,
      width: '100%',
      margin: '0.5em 0',
      padding: '5px',
      outline: 'none',
      border: 'none',
    };
  },
  placeholder: (provided, state) => ({
    ...provided,
    color: state.isFocused ? colors.red : colors.white,
    fontStyle: 'italic',
  }),
  singleValue: (provided, state) => {
    console.log('singlevaluestate');
    console.log(state);
    return {
      ...provided,
      color: `${state.selectProps.menuIsOpen ? colors.red : colors.white }`,
      outline: 'none',
      border: 'none',
    };
  },
};

const Select = ({ options, selectProps, hasSibling = false, ...rest }) => {
  const SelectEl = useRef(null);
  return (
    <SelectWrapper hasSibling={hasSibling}>
      <ReactSelect
        ref={SelectEl}
        components={{
          SelectContainer: SelectContainer,
          Menu: Menu,
          Option: Option,
        }}
        styles={styles}
        options={options}
        {...selectProps}
        {...rest}
      />
    </SelectWrapper>
  );
};

export default Select;
