import React, { useState } from 'react';
import axios from 'axios';

const Photo = () => {
  const [photos, setPhtos] = useState([]);

  const fetchPhotos = () => {
    axios
      .get('http://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        setPhtos(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Photo Page</h1>
      <h2>리코일 상태 들어갈 자리</h2>
      <button onClick={fetchPhotos}>클릭하면 Photo가 나옵니다</button>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>사진 제목은: {photo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Photo;
