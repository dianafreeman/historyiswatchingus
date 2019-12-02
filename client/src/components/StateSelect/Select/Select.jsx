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
  display: flex;
  background-color: ${colors.red};
`;



// const IndicatorContainer = styled.div``;
const styles = {
  // container: () => ({
  //   width: '100%',
  //   position: 'absolute',
  //   backgroundColor: colors.transparent,
  //   borderRadius: 'inherit',
  // }),
  control: (provided, state) => ({
    ...provided,
    width: '100%',
    color: 'black',
    backgroundColor: colors.red,
    border: 'none',
    fontSize: '1.5em',
    outline: 'none',
    border: 'none',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: 'white',
  }),
  input: ( provided, state )=> {
    console.log(state)
    return ({
    ...provided,
    width: '100%',
    margin: '0.5em 0',
    padding: '5px',
    backgroundColor: state.isFocusd ? colors.white : colors.transparent,
    color: state.isFocusd ? colors.red : colors.white,
    outline: 'none',
    border: 'none',
    
  })
},
  placeholder: (provided, state) => ({
    ...provided,
    color: 'white',
    fontStyle: 'italic',
  }),
  singleValue: provided => ({
    ...provided,
    outline: 'none',
    color: 'white',
    border: 'none',
  }),
};

const Select = ({ options, selectProps, ...rest }) => {
  const SelectEl = useRef(null);
  return (
    <SelectWrapper>
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
