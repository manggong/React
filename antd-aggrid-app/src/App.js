import { Link, Route } from 'react-router-dom';
import Home from './components/Home';
import Antd from './components/Antd';
import Grid from './components/Grid';
import '../src/App.css';

function App() {
  return (
    <div className='App'>
      <div>
        <Link to='/antd'>ANTD</Link>
        <Link to='grid'>GRID</Link>
        <Route exact path='/' component={Home} />
        <Route path='/antd' component={Antd} />
        <Route path='/grid' component={Grid} />
      </div>
    </div>
  );
}

export default App;
