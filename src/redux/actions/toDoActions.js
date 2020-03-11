
import * as types from './actionTypes';

export function addTodoItem(payload) {
  return { type: types.ADD_TODO_ITEM, payload };
}
