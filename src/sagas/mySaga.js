import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addData(data) {
  const getData = yield axios.get('https://my-react-todo-12824.firebaseio.com/todos.json');
  const inputData = {
    id: getData.data[getData.data.length - 1].id + 1, // 마지막 원소의 id값 +1로 바꾸기
    text: data.payload,
    checked: false,
  };
  yield axios.put(`https://my-react-todo-12824.firebaseio.com/todos/${getData.data.length}.json`, inputData);
}

function* toggleData(id) {
  const getData = yield axios.get(`https://my-react-todo-12824.firebaseio.com/todos.json`);
  const index = getData.data.findIndex(item => item.id === id.payload);
  getData.data[index].checked = !getData.data[index].checked;
  yield axios.put(`https://my-react-todo-12824.firebaseio.com/todos.json`, getData.data);
  yield put({ type: 'TOGGLE_DATA', payload: id });
}

function* removeData(id) {
  const data = yield axios.get('https://my-react-todo-12824.firebaseio.com/todos.json');
  yield axios.put(
    `https://my-react-todo-12824.firebaseio.com/todos.json`,
    data.data.filter(n => n.id !== id.payload),
  );
  yield put({ type: 'REMOVE_DATA', payload: id });
}

export default function* watch() {
  yield takeEvery('ADD_ITEM', addData);
  yield takeEvery('TOGGLE_ITEM', toggleData);
  yield takeEvery('REMOVE_ITEM', removeData);
}
