import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers, searchQueryUsers, setSearchDataUsers} from '../redux/actions/usersActions';
import UsersTopLine from '../components/UsersTopLine/UsersTopLine';
import UsersTable from '../components/UsersTable/UsersTable';

const UsersPage = () => {
  const dispatch = useDispatch();
  const {isLoading, users, search, searchData} = useSelector(({users}) => users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleSearch = (e) => {
    let str = e.target.value.toLowerCase();
    dispatch(searchQueryUsers(str));

    const newArr = users.filter(item =>
      item.id.toString().toLowerCase().includes(str) ||
      item.name.toLowerCase().includes(str)
    );

    dispatch(setSearchDataUsers(newArr));
  }

  return (
    <>
      <UsersTopLine onSearch={handleSearch} />
      {
        isLoading
          ? 'Loading Users...'
          : <UsersTable users={search.length > 0 ? searchData : users} />
      }
    </>
  );
};

export default UsersPage;