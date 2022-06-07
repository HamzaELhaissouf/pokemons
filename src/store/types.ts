import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEM_DETAILS_REQUEST,
  FETCH_ITEM_DETAILS_SUCCESS,
  FETCH_ITEM_DETAILS_FAILURE,
  SET_SHOW_MODAL,
  LOAD_MORE_ITEMS_REQUEST,
  LOAD_MORE_ITEMS_SUCCESS,
  LOAD_MORE_ITEMS_FAILURE,
} from "./actionTypes";


export interface Item {
  id: number;
  name: string;
  height: number;
  weight: number;
  stats: any;
  abilities: any;
  types: any
}

export interface ItemsState {
  isLoading: boolean;
  items: Item[];
  error: string | null;
  isModalLoading: boolean,
  selectedItem: Item | null,
  showModal: boolean,
  hasMore: boolean
}

export interface FetchItemsSuccessPayload {
  items: Item[];
}

export interface FetchItemsFailurePayload {
  error: string;
}

// items aka pokemons
export interface FetchItemsRequest {
  type: typeof FETCH_ITEMS_REQUEST;
}

export type FetchItemsSuccess = {
  type: typeof FETCH_ITEMS_SUCCESS;
  payload: FetchItemsSuccessPayload;
};

export type FetchItemsFailure = {
  type: typeof FETCH_ITEMS_FAILURE;
  payload: FetchItemsFailurePayload;
};

// item details or pokemons info
export interface FetchItemDetailsRequestPayload {
  id: number;
}
export interface FetchItemDetailsSuccessPayload {
  item: Item;
}

export interface FetchItemDetailsFailurePayload {
  error: string;
}

export interface LoadMoreItemsSuccessPayload {
  items: Item[];
  next: string
}

export interface LoadMoreItemsFailurePayload {
  error: string;
}
export interface FetchItemDetailsRequest {
  type: typeof FETCH_ITEM_DETAILS_REQUEST;
  payload: FetchItemDetailsRequestPayload
}

export type FetchItemDetailsSuccess = {
  type: typeof FETCH_ITEM_DETAILS_SUCCESS;
  payload: FetchItemDetailsSuccessPayload;
};

export type FetchItemDetailsFailure = {
  type: typeof FETCH_ITEM_DETAILS_FAILURE;
  payload: FetchItemDetailsFailurePayload;
};
export interface LoadMoreItemsRequest {
  type: typeof LOAD_MORE_ITEMS_REQUEST;
  payload: number
}

export type LoadMoreItemsSuccess = {
  type: typeof LOAD_MORE_ITEMS_SUCCESS;
  payload: LoadMoreItemsSuccessPayload;
};

export type LoadMoreItemsFailure = {
  type: typeof LOAD_MORE_ITEMS_FAILURE;
  payload: LoadMoreItemsFailurePayload;
};

export type SetShowModal = {
  type: typeof SET_SHOW_MODAL;
  payload: boolean;
}

export type ItemsActions =
  | FetchItemsRequest
  | FetchItemsSuccess
  | FetchItemsFailure
  | FetchItemDetailsRequest
  | FetchItemDetailsSuccess
  | FetchItemDetailsFailure
  | LoadMoreItemsRequest
  | LoadMoreItemsSuccess
  | LoadMoreItemsFailure
  | SetShowModal;