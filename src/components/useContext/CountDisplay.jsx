import React, { useRef } from 'react';
import { useCountState } from './CounterProvider';

const CountDisplay = () => {
  const state = useCountState();
  const renderedRef = useRef(0);

  return (
    <>
    <div>Count: {state.count}</div>
    <div>Renders: {renderedRef.current++}</div>
  </>);
};

export default CountDisplay;
