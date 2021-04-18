import React, { useState } from 'react';
import axios from 'axios';

const User = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>User Page</h1>
      <h2>리덕스 들어갈 자리</h2>
      <button onClick={fetchUsers}>클릭하면 유저정보가 나옵니다.</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>유저 이름은: {user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
