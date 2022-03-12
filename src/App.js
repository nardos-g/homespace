import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import { Signin } from './pages/Signin';
import './index.css'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
