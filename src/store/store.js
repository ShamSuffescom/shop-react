// store/store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  user: null,
};

// Action types
const SET_USER = 'SET_USER';
const LOGOUT_USER = 'LOGOUT_USER';

// Action creators
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const logoutUser = (dispatch,navigate) => ({
  type: LOGOUT_USER,
});

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case LOGOUT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;
