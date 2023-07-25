import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Routes} from 'react-router-dom'
import Nav from './components/Nav';
import Login from './components/Login/login.jsx';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin'/>
        <Route path='/' element={<Home/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
