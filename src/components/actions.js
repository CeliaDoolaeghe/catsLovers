export const CATS_LOADED = 'CATS_LOADED';

export const loadCats = (cats) => ({
  type: CATS_LOADED,
  cats,
});
