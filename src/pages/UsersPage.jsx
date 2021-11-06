import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../redux/actions/usersActions';
import UsersTopLine from '../components/UsersTopLine/UsersTopLine';
import UsersTable from '../components/UsersTable/UsersTable';

const UsersPage = () => {
  const dispatch = useDispatch();
  const {isLoading, users} = useSelector(({users}) => users);
  // const [users, setUsers] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <UsersTopLine />
      {
        isLoading
          ? 'Loading Users...'
          : <UsersTable users={users} />
      }
    </>
  );
};

export default UsersPage;