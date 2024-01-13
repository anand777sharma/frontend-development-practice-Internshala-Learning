// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tweet from './Pages/Tweet';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import UserProfile from './Pages/UserProfile';
import { ToastContainer } from 'react-toastify';
import Notification from './Pages/Notification';
import Explore from './Pages/Explore';


function App() {
  return (
    <Router>
      <div className="container-fluid">
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/tweet' element={<Tweet />} />
          <Route path='/notification' element={<Notification />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/profile' element={<UserProfile />} />
        </Routes>

      </div>

    </Router>
  );
}

export default App;
