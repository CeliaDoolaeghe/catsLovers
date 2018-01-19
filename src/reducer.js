import catsReducer from './components/reducer'
import { combineReducers } from 'redux';
import * as selectors from './components/reducer';

export default combineReducers({
  cats:catsReducer
});

export const getCats = state => selectors.getCats(state.cats);

