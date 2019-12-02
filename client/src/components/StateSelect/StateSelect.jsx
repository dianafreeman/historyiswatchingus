import React, { Component } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Select from './Select';
import ButtonIcon from './ButtonIcon';
import { screens, colors } from '../../config/tailwind/vars';
import { StateOptions } from './Option';

const StateSelect = ({store, selectProps}) => {
  return (
    <>
      <ButtonIcon
        src={`/assets/graphics/${
          store.location ? 'compass' : 'compass_gray'
        }.svg`}
      />
      <Select options={StateOptions} placeholder={'Choose a state'} {...selectProps}/>
    </>
  );
};

export default observer(StateSelect);
