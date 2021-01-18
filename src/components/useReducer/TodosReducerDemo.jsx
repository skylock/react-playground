import React, { useReducer, useState } from 'react';

// a reducer is a function that receives
// the initial state and the action to be performed on that state
const reducer = (state, action) => {
  switch (action.type) {
    case 'add-todo':
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    default:
      return state;
  }
};

export const ToDosReducerDemo = () => {
  // useReducer first arg is a function and second one is the initial state
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState('');

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'add-todo', text });
          setText('');
        }}
      >
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
};
