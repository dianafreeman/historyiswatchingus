import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { animated } from 'react-spring';
import Profile from '../Profile/index'
import {
  FixedCardContainer,
  FixedCardContent,
  CardClose,
  FlexWrapper,
} from './styles';
import RESPONSE from '../../stub/locationRepsonse'

const AnimatedContainer = animated(FixedCardContainer);


const ExpandingCard = ({ isOpen, onClose }) => {
  return (
    <Spring
      from={{
        left: 15,
        bottom: 15,
        right: 15,
        top: 999,
      }}
      to={{
        left: 15,
        bottom: 15,
        right: 15,
        top: isOpen ? 15 : 999,
      }}
    >
      {props => (
        <AnimatedContainer
          style={{ height: isOpen ? 'unset' : 'inherit', ...props }}
        >
          <FixedCardContent isOpen={isOpen}>
            <CardClose onClick={onClose}>X</CardClose>
            <FlexWrapper>
             {/* {RESPONSE.reps.map(rep => (
                <Profile key={rep.CID} BIO={rep} />
              ))}  */}
            </FlexWrapper>
          </FixedCardContent>
        </AnimatedContainer>
      )}
    </Spring>
  );
};

export default ExpandingCard;
