import logo from './logo.svg';
import './App.css';

import {Route, Routes} from 'react-router-dom'
import Nav from './components/Nav';
import Login from './components/Login/login.jsx';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
