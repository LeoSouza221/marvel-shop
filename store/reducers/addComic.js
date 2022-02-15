import { ADD_COMIC } from '../actions/actionTypes';

const initialState = {};

export const addComic = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMIC:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};