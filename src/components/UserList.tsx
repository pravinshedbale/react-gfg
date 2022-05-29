import React, { useEffect, useState } from 'react';
import Navigator from './Navigator';
import './UserList.css';
type IUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};
const UserList = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const api = async () => {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
      const json: { data: IUser[] } = await response.json();
      setUsers(json.data);
    };
    api();
  }, [page]);
  const renderUsers = (user: IUser) => {
    return (
      <div key={user.id} className='user'>
        <img src={user.avatar} alt={user.first_name} className='user-img' />
        <label>{`${user.first_name} ${user.last_name}`}</label>
        <label>{user.email}</label>
      </div>
    );
  };
  const sortUsers = () => {
    let tempUsers = [...users];
    tempUsers = tempUsers.sort((x, y) => x.first_name.localeCompare(y.first_name));
    setUsers(tempUsers);
  };
  return (
    <>
      <Navigator></Navigator>
      <button onClick={() => setPage(1)}>Page 1</button>
      <button onClick={() => setPage(2)}>Page 2</button>
      <button onClick={sortUsers}>Sort By First Name</button>
      <div className='container'>{users.map((user) => renderUsers(user))}</div>
    </>
  );
};

export default UserList;
