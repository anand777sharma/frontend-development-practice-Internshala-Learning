import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import AddSales from "./pages/AddSales";
import TopFiveSales from "./pages/TopFiveSales";
import TotalRevenue from "./pages/TotalRevenue";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoMatch from "./components/NoMatch";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<AddSales />} />
          <Route path='/addsales' element={<AddSales />} />
          <Route path='/top5sales' element={<TopFiveSales />} />
          <Route path='/todaytotalrevenue' element={<TotalRevenue />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
