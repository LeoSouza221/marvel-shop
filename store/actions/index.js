import { ADD_COMIC } from '../actions/actionTypes';

export const addComic = value => ({
  type: ADD_COMIC,
  newValue: value
})