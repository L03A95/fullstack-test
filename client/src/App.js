import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import {Route, Routes} from 'react-router-dom'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Login/>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
