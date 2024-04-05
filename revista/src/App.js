import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Header} from './components/Header';
import {Menu} from './components/Menu';
import {Home} from './components/Home';
import {One} from './components/One';
import {Two} from './components/Two';
import {Three} from './components/Three';
import { MemoryGame } from './components/MemoryGame';
import { Aboutus } from './components/Aboutus';
import { Workshops } from './components/Workshops';

function App() {
  return (
    <div className="App">
     <Header />
      <Menu />
     <Home />
     <One/>
     <Two/>
     <Three/>
     <MemoryGame />
     <Aboutus />
     <Workshops />
    </div>
  );
}

export default App;
