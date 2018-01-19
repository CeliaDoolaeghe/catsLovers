import { CATS_LOADED } from './actions';

const initialState = {
  cats: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case CATS_LOADED:
    return {...state, cats: action.cats};
  default:
    return state;
  }
};

export default reducer;

export const getCats = state => state.cats;