const ADD_ITEM = 'ADD_ITEM'; // 아이템 추가
const KEY_INPUT = 'KEY_INPUT'; // 입력받은 키 input에 넣기
const TOGGLE_ITEM = 'TOGGLE_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

export const addItem = input => ({
  type: ADD_ITEM,
  input,
});

export const keyInput = event => ({
  type: KEY_INPUT,
  event,
});

export const toggleItem = id => ({
  type: TOGGLE_ITEM,
  id,
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  id,
});

const initState = {
  id: 4,
  input: '',
  todos: [
    { id: 0, text: '리액트 소개', checked: false },
    { id: 1, text: 'JSX 사용해보기', checked: true },
    { id: 2, text: '라이프 사이클 이해하기', checked: false },
    { id: 3, text: '테스트', checked: false },
  ],
};

export default function Reducer(state = initState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        id: action.id + 1,
        todos: state.todos.concat({
          text: action.input,
        }),
      };
    case KEY_INPUT:
      return {
        ...state,
        input: action.input,
      };
    default:
      return state;
  }
}
