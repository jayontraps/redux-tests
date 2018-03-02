import * as types from './actionTypes';

export function toggle(val) {
  return {
    type: types.TOGGLE_BUTTON,
    payload: val
  }
}

export function foobar() {
  return {
    type: types.FOO_BAR,
    payload: 'foo bar'
  }
}
