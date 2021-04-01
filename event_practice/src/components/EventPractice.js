import React, {useState} from 'react';

function EventPractice() {

  const [form, setForm] = useState({
    username: '',
    message: ''
  })

  const {username, message} = form;

  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    }
    console.log('밑에는 넥스트 폼')
    console.log(nextForm)
    setForm(nextForm)
  }

  const onClick = () => {
    alert(`${username}: ${message}`)
    setForm({
      username: '',
      message: ''
    })
  }

  const onKeyPress = e => {
    if(e.key === 'Enter') {
      onClick();
    }
  }

  return(
    <div style = {{textAlign: "center"}}>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="message"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <h2>{username}</h2>
      <h2>{message}</h2>
      <button onClick={onClick} style ={{borderRadius: "5px"}} >버튼 데스네!</button>
    </div>
  )
}

export default EventPractice;