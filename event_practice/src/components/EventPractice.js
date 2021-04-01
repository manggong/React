import React from 'react';

function EventPractice() {
  return(
    <div style = {{textAlign: "center"}}>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="아무거나 일단 틀어!"
        onChange={
          (e) => {
            console.log(e.target.value)
          }
        }
      />
    </div>
  )
}

export default EventPractice;