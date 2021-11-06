import React, {useEffect, useState} from 'react';
import UsersTopLine from '../components/UsersTopLine/UsersTopLine';
import UsersTable from '../components/UsersTable/UsersTable';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      <UsersTopLine />
      <UsersTable users={users} />
    </>
  );
};

export default UsersPage;