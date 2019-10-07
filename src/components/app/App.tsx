import React from 'react';
import './App.scss';
import Header from '../header/Header';
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';
import Offer from '../offer/Offer';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';



const App: React.FC = () => {
  return (
    <div className="main-layout">
      <Header />
      <About />
      <Portfolio />
      <Offer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
