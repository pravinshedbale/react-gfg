import { useEffect, useState } from 'react';
import Navigator from './Navigator';

type IUser = {
  username: string;
};
const UseEffect = () => {
  const [users, setUsers] = useState<string[]>();
  useEffect(() => {
    const api = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const json: IUser[] = await response.json();
      setUsers(json.map((x) => x.username));
    };
    api();
  }, []);
  return (
    <>
      <Navigator></Navigator>
      {users?.map((user, i) => (
        <p key={i}>{user}</p>
      ))}
    </>
  );
};

export default UseEffect;
