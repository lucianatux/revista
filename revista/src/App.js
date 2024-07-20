import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import MainContent from "./MainContent";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;



