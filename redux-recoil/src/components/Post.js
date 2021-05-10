import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchingSuccess } from '../modules/posts';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const text = useSelector((state) => state.posts.text);
  const dispatch = useDispatch();

  const fetchPosts = () => {
    axios
      .get('http://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data);
        dispatch(fetchingSuccess());
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Post Page</h1>
      <h2>리덕스 상태: {text}</h2>
      <button onClick={fetchPosts}>클릭하면 POST가 나옵니다</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>글 제목은: {post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
