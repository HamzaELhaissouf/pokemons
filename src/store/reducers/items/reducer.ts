import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
  } from "../../actionTypes";
  
  import { ItemsActions, ItemsState } from "../../types";
  
  const initialState: ItemsState = {
    isLoading: false,
    items: [],
    error: null,
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
      default:
        return {
          ...state,
        };
    }
  };