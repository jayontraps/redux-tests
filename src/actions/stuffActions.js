import * as types from './actionTypes';

function url() {
  return 'https://api.github.com/users/jayontraps';
}

export function receiveStuff(json) {
  return {
    type: types.RECEIVE_STUFF,
    stuff: json
  };
}

export function fetchStuff() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveStuff(json)));
  };
}
