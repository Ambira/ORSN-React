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
        <Route path='/journal' element={<Journal />} />
        <Route path='/members' element={<Members />} />
        <Route path='/talk_program' element={<Talk_program />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Timeline />
      <Footer />

      {/* Follow us on X button */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <a
          href="https://x.com/orsn_np"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "25px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "14px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ marginRight: "8px" }}
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Follow us on X
        </a>
      </div>
    </Router>
  );
}

export default App;
