import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Conference from './pages/Conference';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Timeline from './components/Timeline';
import Journal from './pages/Journal';
import Members from './pages/Members';
import Talk_program from './pages/Talk_program';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/conference' element={<Conference />} />
        <Route path='/journal' element={<Journal/>}/>
        <Route path='/members' element={<Members/>}/>
        <Route path='/talk_program' element={<Talk_program/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Timeline />
      <Footer />
    </Router>
  );
}

export default App;
