import { APP_START, ADD_ITEM, KEY_INPUT, TOGGLE_ITEM, REMOVE_ITEM } from './Actions';

const initState = {
  input: '',
  todos: [],
};

export default function Reducer(state = initState, action) {
  const index = state.todos.findIndex(todo => todo.id === action.payload);
  const selected = state.todos[index];
  const nextTodos = [...state.todos];
  switch (action.type) {
    case APP_START:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_ITEM:
      return {
        ...state,
        input: '',
        todos: state.todos.concat({
          id: state.todos[state.todos.length - 1].id + 1,
          text: action.payload,
          checked: false,
        }),
      };
    case KEY_INPUT:
      return {
        ...state,
        input: action.payload,
      };

    case TOGGLE_ITEM:
      nextTodos[index] = {
        ...selected,
        checked: !selected.checked,
      };

      return {
        todos: nextTodos,
      };

    case REMOVE_ITEM:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    default:
      return state;
  }
}
