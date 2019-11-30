import React, { Component } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Select from './Select';
import Button from '../Button';
import { screens } from '../../config/tailwind/vars'

const SelectWrapper = styled.div`
  width: 100%;
  margin: auto;
  color: black;
  display: flex;
  justify-content: space-evenly;
`;

export const LocationText = styled.p`
  ${tw`text-left m-0 font-subheading`}
  font-size: 24px;
  line-height: 3em;
`;

export const ButtonIcon = styled.img`
  ${tw`h-auto float-left mr-4 flex`}
@media screen and (min-width: ${screens.md}){
  width: 90px;
  height: auto;
}
  `;

class StateSelect extends Component {
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
    // this.setState({ showSelect: false });
  };
  render() {
    return (
      <>
        <Button
          variant={this.props.buttonVariant || 'red'}
          style={tw`py-1 w-2/3 rounded-lg border-4 flex`}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          ref={this.buttonELRef}
          // onClick={this.onClick}
        >
          <ButtonIcon
            src={`/assets/graphics/${
              this.props.store.location ? 'compass' : 'compass_gray'
            }.svg`}
            style={{ width: '20%', margin: '1em 0' }}
          />
          <SelectWrapper>
            <Select
              ref={this.selectElRef}
              placeholder={'Choose a state'}
              onChange={this.onChange}
              defaultValue={this.props.store.location || null}
            />
          </SelectWrapper>
        </Button>
      </>
    );
  }
}

export default observer(StateSelect);
