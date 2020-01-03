import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addData(data) {
  const id = yield axios.get('https://my-react-todo-12824.firebaseio.com/todos.json');
  const inputData = {
    id: yield id.data.length,
    text: data.payload,
    checked: false,
  };
  yield axios.put(`https://my-react-todo-12824.firebaseio.com/todos/${id.data.length}.json`, inputData);
  yield put({ type: 'ADD_DATA', payload: data });
}

function* toggleData(id) {
  yield console.log(id);
  yield axios.update(`https://my-react-todo-12824.firebaseio.com/todos/${id.payload}/checked.json`, !true);
  yield put({ type: 'TOGGLE_DATA', payload: id });
}

function* removeData(id) {
  yield axios.delete(`https://my-react-todo-12824.firebaseio.com/todos/${id.payload}.json`);
  yield put({ type: 'REMOVE_DATA', payload: id });
}

export default function* watch() {
  yield takeEvery('ADD_ITEM', addData);
  yield takeEvery('TOGGLE_ITEM', toggleData);
  yield takeEvery('REMOVE_ITEM', removeData);
}
