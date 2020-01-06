import { createAction } from 'redux-actions';

export const APP_START = 'APP_START';
export const ADD_ITEM = 'ADD_ITEM'; // 아이템 추가
export const KEY_INPUT = 'KEY_INPUT'; // 입력받은 키 input에 넣기
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const appStart = createAction(APP_START);
export const addItem = createAction(ADD_ITEM, text => text);
export const keyInput = createAction(KEY_INPUT, text => text);
export const removeItem = createAction(REMOVE_ITEM, id => id);
export const toggleItem = createAction(TOGGLE_ITEM, id => id);
