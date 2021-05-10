import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchingSuccess } from '../modules/users';

const User = () => {
  const [users, setUsers] = useState([]);
  const text = useSelector((state) => state.users.text);
  const dispatch = useDispatch();

  const fetchUsers = () => {
    axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
        dispatch(fetchingSuccess());
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>User Page</h1>
      <h2>리덕스 상태: {text}</h2>
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
