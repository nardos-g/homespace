import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { Signin } from './pages/Signin';
import './index.css'
import { Login } from './pages/login';
import { Landing } from './pages/Landing';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/landing' element={<Landing />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
