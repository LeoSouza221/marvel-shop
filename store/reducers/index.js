import { addComic } from './addComic';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  comicsState: addComic,
});