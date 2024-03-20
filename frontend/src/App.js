import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Home from './pages/Home';
import TermsOfUse from './pages/TermsOfUse';
import Contact from './pages/Contact';
import Browse from './pages/Browse';
import TorqueDetails from './pages/TorqueDetails';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '66vh' }}>
        {/* Navigation and other components */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/:make/:model/:startYear/:endYear" element={<TorqueDetails />} />
          {/* Other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
