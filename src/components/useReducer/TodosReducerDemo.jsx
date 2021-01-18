import React, { useReducer, useState } from 'react';

// a reducer is a function that receives
// the initial state and the action to be performed on that state
const reducer = (state, action) => {
  switch (action.type) {
    case 'add-todo':
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todosCount: state.todosCount + 1,
      };
    case 'toggle-todo':
      return {
        todos: state.todos.map((t, idx) => {
          t = idx === action.idx ? { ...t, completed: !t.completed } : t;

          return t;
        }),
        todosCount: state.todosCount,
      };
    default:
      return state;
  }
};

export const ToDosReducerDemo = () => {
  // useReducer first arg is a function and second one is the initial state
  const [{ todos, todosCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todosCount: 0,
  });
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
      <div>Count : {todosCount}</div>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      {todos.map((t, idx) => (
        <div
          key={t.text}
          style={{
            textDecoration: t.completed ? 'line-through' : '',
          }}
          onClick={() => dispatch({ type: 'toggle-todo', idx })}
        >
          {t.text}
        </div>
      ))}
    </div>
  );
};
