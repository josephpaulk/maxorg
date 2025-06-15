import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import TechForGood from './pages/TechForGood';
import Resources from './pages/Resources';
import ForNonprofits from './pages/ForNonprofits';
import ForFreelancers from './pages/ForFreelancers';
import PartnerWithUs from './pages/PartnerWithUs';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/tech-for-good" element={<TechForGood />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/for-nonprofits" element={<ForNonprofits />} />
            <Route path="/for-freelancers" element={<ForFreelancers />} />
            <Route path="/partner-with-us" element={<PartnerWithUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;