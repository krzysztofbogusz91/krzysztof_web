import React from 'react';
import './App.scss';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Offer from './components/Offer';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
