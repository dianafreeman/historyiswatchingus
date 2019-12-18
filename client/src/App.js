import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import StateSelect from './components/StateSelect';
import Store from './store';
import { colors } from './config/tailwind/vars';

const AppWrapper = styled.div`
  height: 100vh;
`;

const FadeTextWrapper = styled(animated.div)`
  position: relative;
  width: inherit;
  color: #5a5a5a;
`;

const TEXT = [
  {
    order: 0,
    string: `Its 1787. The close of the Constitutional Convention. `,
    transform: false,
  },
  {
    order: 1,
    string: `As final deliberations begin, a woman in attendance asks Dr. Benjamin Franklin`,
    transform: false,
  },
  {
    order: 2,
    string: `“Well doctor, what have we got?`,
    transform: {
      color: 'white',
      size: 1.5,
    },
  },
  {
    order: 3,
    string: `A republic, or a monarchy?”`,
    transform: {
      color: 'white',
      size: 1.5,
    },
  },
  {
    order: 4,
    string: `“A republic”, replied Dr. Franklin.`,
    transform: {
      size: 1.25,
    },
  },
  {
    order: 5,
    string: `“if you can keep it.”`,
    transform: {
      color: 'white',
      size: 1.5,
    },
  },
];

const FadeInText = ({ item }) => {
  const props = useSpring({
    opacity: 1,
    color:
      item.transform && item.transform.color ? item.transform.color : 'gray',
    fontSize:
      item.transform && item.transform.size
        ? `${item.transform.size}em`
        : 'inherit',
    from: {
      opacity: 0,
      fontSize: '1em',
    },
  });
  return (
    <FadeTextWrapper
      key={`item-${item.order}`}
      style={{ position: 'relative', ...props }}
    >
      <h1>{item.string}</h1>
    </FadeTextWrapper>
  );
};

const App = () => {
  const [index, setIndex] = useState(0);
  const content = TEXT;

  return (
    <AppWrapper onClick={() => index < content.length && setIndex(index + 1)}>
      {content
        .filter((_item, idx) => idx <= index)
        .map(item => (
          <FadeInText item={item} />
        ))}
    </AppWrapper>
  );
};
export default App;
