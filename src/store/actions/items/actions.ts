import { LOAD_MORE_ITEMS_REQUEST, LOAD_MORE_ITEMS_SUCCESS, SET_SHOW_MODAL } from './../../actionTypes';
import { FetchItemDetailsRequestPayload, LoadMoreItemsRequest, LoadMoreItemsSuccess, LoadMoreItemsSuccessPayload, SetShowModal } from './../../types';
import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEM_DETAILS_REQUEST,
  FETCH_ITEM_DETAILS_SUCCESS,
  FETCH_ITEM_DETAILS_FAILURE,
} from "../../actionTypes";
import {
  FetchItemDetailsFailure,
  FetchItemDetailsFailurePayload,
  FetchItemDetailsRequest,
  FetchItemDetailsSuccess,
  FetchItemDetailsSuccessPayload,
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

export const fetchItemDetailsRequest = (
  payload: FetchItemDetailsRequestPayload):
  FetchItemDetailsRequest => ({
    type: FETCH_ITEM_DETAILS_REQUEST,
    payload
  })

export const fetchItemDetailsSuccess = (
  payload: FetchItemDetailsSuccessPayload
): FetchItemDetailsSuccess => ({
  type: FETCH_ITEM_DETAILS_SUCCESS,
  payload,
});

export const fetchItemDetailsFailure = (
  payload: FetchItemDetailsFailurePayload
): FetchItemDetailsFailure => ({
  type: FETCH_ITEM_DETAILS_FAILURE,
  payload,
});

export const loadMoreItemsRequest = (
  payload: number):
  LoadMoreItemsRequest => ({
    type: LOAD_MORE_ITEMS_REQUEST,
    payload
  })

export const loadMoreItemsSuccess = (
  payload: LoadMoreItemsSuccessPayload
): LoadMoreItemsSuccess => ({
  type: LOAD_MORE_ITEMS_SUCCESS,
  payload,
});

export const loadMoreItemsFailure = (
  payload: FetchItemDetailsFailurePayload
): FetchItemDetailsFailure => ({
  type: FETCH_ITEM_DETAILS_FAILURE,
  payload,
});

export const setShowModal = (
  payload: boolean
): SetShowModal => ({
  type: SET_SHOW_MODAL,
  payload
});