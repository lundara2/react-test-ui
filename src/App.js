import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesPage from './Services/Routes';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';

export default function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <RoutesPage />
        <Footer />
      </div>
    </Router>
  );
}
