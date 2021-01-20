import React, { useContext, useReducer } from 'react';

export const CountStateContext = React.createContext();
export const CountDispatchContext = React.createContext();

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  );
};

function useCountState() {
  const context = useContext(CountStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
}

function useCountDispatch() {
  const dispatch = useContext(CountDispatchContext);
  if (dispatch === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider');
  }
  return dispatch;
}

export { CounterProvider, useCountState, useCountDispatch };
