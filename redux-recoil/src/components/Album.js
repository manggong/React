import React, { useState } from 'react';
import axios from 'axios';

const Album = () => {
  const [albums, setAlbums] = useState([]);

  const fetchAlbums = () => {
    axios
      .get('http://jsonplaceholder.typicode.com/albums')
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Album Page</h1>
      <h2>리코일 상태 들어갈 자리</h2>
      <button onClick={fetchAlbums}>클릭하면 ALUM가 나옵니다</button>
      <ul>
        {albums.map((post) => (
          <li key={post.id}>앨범 제목은: {post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Album;
