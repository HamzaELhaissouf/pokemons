import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEM_DETAILS_REQUEST,
  FETCH_ITEM_DETAILS_SUCCESS,
  FETCH_ITEM_DETAILS_FAILURE,
  LOAD_MORE_ITEMS_SUCCESS,
  LOAD_MORE_ITEMS_FAILURE,
  SET_SHOW_MODAL,
  LOAD_MORE_ITEMS_REQUEST
} from "../../actionTypes";

import { ItemsActions, ItemsState } from "../../types";

const initialState: ItemsState | any = {
  isLoading: false,
  items: [],
  error: null,
  isModalLoading: false,
  selectedItem: null,
  showModal: false,
  hasMore: true
};

export default (state = initialState, action: ItemsActions) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload.items,
        error: null,
      };
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        items: [],
        error: action.payload.error,
      };
    case FETCH_ITEM_DETAILS_REQUEST:
      return {
        ...state,
        isModalLoading: true
      }
    case FETCH_ITEM_DETAILS_SUCCESS:
      return {
        ...state,
        isModalLoading: false,
        selectedItem: action.payload.item,
        error: null
      }
    case FETCH_ITEM_DETAILS_FAILURE:
      return {
        ...state,
        isModalLoading: false,
        selectedItem: null,
        error: action.payload.error,
      }
    case LOAD_MORE_ITEMS_REQUEST:
      return {
        ...state,
      };
    case LOAD_MORE_ITEMS_SUCCESS:
      console.log(action.payload.next)
      const newItems = action.payload.items;
      const { items } = state;
      return {
        ...state,
        items: [...items, ...newItems],
        hasMore: !!action.payload.next,
      };
    case LOAD_MORE_ITEMS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case SET_SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload
      }
    default:
      return {
        ...state,
      };
  }
};