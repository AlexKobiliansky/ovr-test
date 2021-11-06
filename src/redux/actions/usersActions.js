import {SET_LOADING_USERS, SET_USERS} from '../types';
import {usersAPI} from "../../api/usersAPI";

export const fetchUsers = () => async dispatch  => {
  try {
    dispatch(setLoadingUsers(true));
    const data = await usersAPI.getUsers();
    console.log(data)
    dispatch(setUsers(data));
  } catch(e) {
    alert(`Ошибка при загрузке пользователей: ${e.message}`)
  }
};

export const setUsers = users => ({type: SET_USERS, payload: users});
export const setLoadingUsers = isLoading => ({type: SET_LOADING_USERS, payload: isLoading});
