import { createAction } from 'redux-actions';

const APP_START = 'APP_START';
const ADD_ITEM = 'ADD_ITEM'; // 아이템 추가
const KEY_INPUT = 'KEY_INPUT'; // 입력받은 키 input에 넣기
const TOGGLE_ITEM = 'TOGGLE_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

export const appStart = createAction(APP_START);
export const addItem = createAction(ADD_ITEM, text => text);
export const keyInput = createAction(KEY_INPUT, text => text);
export const removeItem = createAction(REMOVE_ITEM, id => id);
export const toggleItem = createAction(TOGGLE_ITEM, id => id);

let id = 0;
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
      id = action.payload.length;
      return {
        ...state,
        id,
        todos: action.payload,
      };
    case ADD_ITEM:
      id += 1;
      return {
        ...state,
        input: '',
        todos: state.todos.concat({
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
