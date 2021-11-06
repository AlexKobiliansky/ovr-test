import {SEARCH_DATA_USERS, SEARCH_QUERY_USERS, SET_LOADING_USERS, SET_USERS} from "../types";

const defaultState = {
  isLoading: false,
  users: [],
  search: '',
  searchData: [],
}

export default function usersReducer (state=defaultState, action) {
  switch (action.type) {
    case SET_LOADING_USERS:
      return {
        ...state,
        isLoading: action.payload
      }
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false
      }
    case SEARCH_QUERY_USERS:
      return {
        ...state,
        search: action.payload
      }
    case SEARCH_DATA_USERS:
      return {
        ...state,
        searchData: action.payload
      }
    default:
      return state
  }
}