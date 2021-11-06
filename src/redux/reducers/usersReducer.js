import {SET_LOADING_USERS, SET_USERS} from "../types";

const defaultState = {
  isLoading: false,
  users: [],
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
    default:
      return state
  }
}