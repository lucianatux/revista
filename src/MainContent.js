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
import { Pictorial } from './components/Pictorial';
import { Quantum } from './components/Quantum';
import { Scene } from './components/Scene';
import { TimeSpace } from './components/TimeSpace';
import { Crossword } from './Crossword';
import { Body } from './components/Body';
import { MagicWorld } from './components/MagicWorld';
import { Simon} from './2025components/Simon';
import { Music} from './2025components/Music';
import {Invitation} from './2025components/Invitation';
import { Paciente} from './2025components/Paciente';
import { Tramite } from './2025components/Tramite';
import { Misil } from './2025components/Misil';

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
        <Route path="/pictorial" element={<Pictorial />} />
        <Route path="/quantum" element={<Quantum />} />
        <Route path="/scene" element={<Scene />} />
        <Route path="/timespace" element={<TimeSpace />} />
        <Route path="/crossword" element={<Crossword />} />
        <Route path="/body" element={<Body />} />
        <Route path="/magicworld" element={<MagicWorld />} />
        <Route path="/simon" element={<Simon />} />
        <Route path="/music" element={<Music />} />
        <Route path="/invitation" element={<Invitation />} />
        <Route path="/paciente" element={<Paciente />} />
        <Route path="/tramite" element={<Tramite />} />
        <Route path="/misil" element={<Misil />} />




        




      </Routes>
    </>
  );
}

export default MainContent;

