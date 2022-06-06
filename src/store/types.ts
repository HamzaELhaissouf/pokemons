import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from "./actionTypes";

export interface Sprites {
  default: string;
}

export interface Item {
  id: number;
  name: string;
  cost: boolean;
  fling_power: number;
  flingEffect: string;
  sprites: Sprites;
}

export interface ItemsState {
  isLoading: boolean;
  items: Item[];
  error: string | null;
}

export interface FetchItemsSuccessPayload {
  items: Item[];
}

export interface FetchItemsFailurePayload {
  error: string;
}

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

export type ItemsActions =
  | FetchItemsRequest
  | FetchItemsSuccess
  | FetchItemsFailure;