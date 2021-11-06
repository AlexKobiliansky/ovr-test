import {SEARCH_DATA_USERS, SEARCH_QUERY_USERS, SET_LOADING_USERS, SET_USERS} from '../types';
import {usersAPI} from "../../api/usersAPI";

export const fetchUsers = () => async dispatch  => {
  try {
    dispatch(setLoadingUsers(true));
    const data = await usersAPI.getUsers();
    dispatch(setUsers(data));
  } catch(e) {
    alert(`Ошибка при загрузке пользователей: ${e.message}`)
  }
};

// actions
export const setUsers = users => ({type: SET_USERS, payload: users});
export const setLoadingUsers = isLoading => ({type: SET_LOADING_USERS, payload: isLoading});
export const searchQueryUsers = searchQuery => ({type: SEARCH_QUERY_USERS, payload: searchQuery});
export const setSearchDataUsers = searchData => ({type: SEARCH_DATA_USERS, payload: searchData});
