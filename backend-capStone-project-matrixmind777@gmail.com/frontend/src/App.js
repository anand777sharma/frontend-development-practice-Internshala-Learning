// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Tweet from './Pages/Tweet';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import UserProfile from './Pages/UserProfile';


function App() {
  return (
    <Router>
    
        <Routes>
          
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/tweet' element={<Tweet />} />
          <Route path='/profile' element={<UserProfile />} />
          
        </Routes>
     
    </Router>
  );
}

export default App;
