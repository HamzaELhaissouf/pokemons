import { createSelector } from "reselect";

import { AppState } from "../../reducers";

const getIsLoading = (state: AppState) => state.items.isLoading;

const getitems = (state: AppState) => state.items.items;

const getError = (state: AppState) => state.items.error;


export const getItemsSelector = createSelector(getitems, (items) => items);

export const getIsLoadingSelector = createSelector(
  getIsLoading,
  (isLoading) => isLoading
);

export const getErrorSelector = createSelector(getError, (error) => error);