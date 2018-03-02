import {TEST} from '../actions/actionTypes';

export default function test(
  state = [],
  action = {}
) {
  switch (action.type) {
    case TEST:
      return action.payload;

    default:
      return state;
  }
}
