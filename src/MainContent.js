import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './components/Home';
import { One } from './components/One';
import { Two } from './components/Two';
import { Three } from './components/Three';
import { MemoryGame } from './components/MemoryGame';
import { Aboutus } from './components/Aboutus';
import { Workshops } from './components/Workshops';
import { Contact } from './components/Contact';
import { OldEditions } from './components/OldEditions';
import { Games } from './components/Games';
import { Poetic } from './components/Poetic';
import { Interview } from './components/Interview';
import { Listening } from './components/Listening';
import { Wordle } from './components/Wordle';
import {Jump } from './components/Jump';
import { NewMirada } from './components/NewMirada';

function MainContent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {location.pathname === "/" && <Home />}
      <Routes>
      <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/oldeditions" element={<OldEditions />} />
        <Route path="/games" element={<Games />} />
        <Route path="/memory-game" element={<MemoryGame />} />
        <Route path="/wordle" element={<Wordle />} />
        <Route path="/jump" element={<Jump />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        <Route path="/poetic" element={<Poetic />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/listening" element={<Listening />} />
        <Route path="/newmirada" element={<NewMirada />} />


      </Routes>
    </>
  );
}

export default MainContent;

