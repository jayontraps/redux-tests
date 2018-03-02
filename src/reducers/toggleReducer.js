import * as types from '../actions/actionTypes';

export default function toggle(
  state = {},
  action = {}
) {
  switch (action.type) {
    case types.TOGGLE_BUTTON:
      return {
        ...state,
        'button': !action.payload
      }

    case types.FOO_BAR:
      console.log(action.type);
      return {
        ...state,
        'foobar': action.payload
      };

    default:
      return state;
  }
}
