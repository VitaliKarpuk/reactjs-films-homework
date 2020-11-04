import { createSelector } from "reselect";

const getFilmsOriginTitle = state => {
  console.log(state);
  return state.original_title
}

export const getFilmsTitle = createSelector([getFilmsOriginTitle], (title) => {
  console.log(title);
  return title
})