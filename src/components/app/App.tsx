import React from 'react';
import './App.scss';
import Header from '../header/Header';
import About from '../about/About';
import Services from '../services/Services';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';



const App: React.FC = () => {
  return (
    <div className="main-layout">
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
