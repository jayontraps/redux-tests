import * as types from './actionTypes';
import dumbyData from './dumbyData';

export function testRedux() {
  return {
    type: types.TEST,
    payload: dumbyData
  }
}
