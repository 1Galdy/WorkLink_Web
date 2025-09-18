import React from 'react'
import './App.css';

// Navigation components
import Navbar from './components/Nav';
import Footer from './components/Footer';
import NavbarMobile from './components/NavbarMobile';

// Navigation
import { BrowserRouter, Routes, Route } from "react-router";

// Pages du site
import Home from './features/featureHome/Home';
import Service from './features/featureService/Services';
import Tarifs from './features/featureTarifs/Tarifs';
import Contact from './features/featureContact/Contact';
import Index from './screen';

//responsive size
import { useWindowSize } from './hook/useWindowSize';


function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        {/* <NavbarMobile /> */}
          <MyComponent />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path='/services' element={<Service/>} />
          <Route path='/tarifs' element={<Tarifs />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* À commenter une fois le responsive terminé, il sert uniquement à afficher la taille (dimension) de l'écran sur lequel on se trouve */}
      <WidthComponent />
    </>
  )
}

function MyComponent() {
  const { width, height } = useWindowSize()

  return (
    <div style={{position: "absolute"}}>
      {/* <p>📏 Largeur : {width}px</p>
      <p>📐 Hauteur : {height}px</p> */}

      {/* la taille d'écran de base 768 */}

      {width > 500 ? (
        // <p>Affichage desktop / tablette</p>
        <Navbar />
      ) : (
        // <p>Affichage mobile</p>
        <NavbarMobile />
      )}
    </div>
  )
}

function WidthComponent() {
  const { width, height } = useWindowSize()

  return (
    <div style={{position: "absolute"}}>
      <p>📏 Largeur : {width}px</p>
      <p>📐 Hauteur : {height}px</p>

      {/* la taille d'écran de base 768 */}

      {width > 768 ? (
        <p>Affichage desktop / tablette</p>
      ) : (
        <p>Affichage mobile</p>
      )}
    </div>
  )
}

export default App
