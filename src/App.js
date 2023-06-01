
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Summary from './components/Summary/Summary';
import Booking from './components/Booking/Booking';
import BookingSuccess from './components/Success/BookingSuccess';
import Navbar from '../src/components/Navbar/Navbar.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/summary/:id' element={<Summary />} />
        <Route path='/booking/:id' element={<Booking />} />
        <Route path='/bookingSuccess' element={<BookingSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
