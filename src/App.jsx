import './App.css';

// Navigation components
import Navbar from './components/Nav';
import Footer from './components/Footer';

// Navigation
import { BrowserRouter, Routes, Route } from "react-router";

// Pages du site
import Home from './features/featureHome/Home';
import Service from './features/featureService/Services';
import Tarifs from './features/featureTarifs/Tarifs';
import Contact from './features/featureContact/Contact';
import Index from './screen';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path='/services' element={<Service/>} />
          <Route path='/tarifs' element={<Tarifs />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
