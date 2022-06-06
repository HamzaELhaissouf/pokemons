import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_SUCCESS,
} from "../../actionTypes";
import {
  FetchItemsFailure,
  FetchItemsFailurePayload,
  FetchItemsRequest, FetchItemsSuccess, FetchItemsSuccessPayload,
} from "../../types";

export const fetchItemsRequest = (): FetchItemsRequest => ({
  type: FETCH_ITEMS_REQUEST,
});

export const fetchItemsSuccess = (
  payload: FetchItemsSuccessPayload
): FetchItemsSuccess => ({
  type: FETCH_ITEMS_SUCCESS,
  payload,
});

export const fetchItemsFailure = (
  payload: FetchItemsFailurePayload
): FetchItemsFailure => ({
  type: FETCH_ITEMS_FAILURE,
  payload,
});