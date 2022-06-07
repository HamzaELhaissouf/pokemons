import { createSelector } from "reselect";

import { AppState } from "../../reducers";

const getIsLoading = ({ items }: AppState) => items.isLoading;

const getitems = (state: AppState ) => state.items.items;

const getError = (state: AppState ) => state.items.error;

const getIsModalLoading = (state: AppState ) => state.items.isModalLoading;

const getSelectedItem = (state: AppState ) => state.items.selectedItem;

const getShowModal = (state: AppState ) => state.items.showModal;

const getHasMore = (state: AppState ) => state.items.hasMore;


export const getItemsSelector = createSelector(getitems, (items) => items);

export const getIsLoadingSelector = createSelector(
  getIsLoading,
  (isLoading) => isLoading
);

export const getErrorSelector = createSelector(getError, (error) => error);

export const getIsModalSelector = createSelector(getIsModalLoading, (error) => error);

export const getSelectedItemSelector = createSelector(getSelectedItem, (error) => error);

export const getShowModalSelector = createSelector(getShowModal, (error) => error);

export const getHasMoreSelector = createSelector(getHasMore, (error) => error);

