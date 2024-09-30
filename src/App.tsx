import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'primereact/resources/themes/saga-blue/theme.css';  // You can choose different themes
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ClaimsReport from './pages/ClaimsReport';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { ToastProvider } from './utils/ToastContext';
import './App.css';


function App() {
  return (
    <Router>
      <ToastProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/claims-report" element={<ClaimsReport />} />
        </Routes>
        <Footer />
      </ToastProvider>
    </Router>
  );
}

export default App;
