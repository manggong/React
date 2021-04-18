import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Post from './components/Post';
import Album from './components/Album';
import Photo from './components/Photo';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Link to='/'>HOME</Link>
      <Link to='/user'>USER</Link>
      <Link to='/post'>POST</Link>
      <Link to='/album'>ALBUM</Link>
      <Link to='/photo'>PHOTO</Link>
      {/* 라우터 */}
      <Route path='/' component={Home} exact={true} />
      <Route path='/user' component={User} />
      <Route path='/post' component={Post} />
      <Route path='/album' component={Album} />
      <Route path='/photo' component={Photo} />
    </div>
  );
}

export default App;
