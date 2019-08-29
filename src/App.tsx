import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Offer from './components/offer/Offer';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

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
