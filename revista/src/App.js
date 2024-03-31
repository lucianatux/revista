import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Header} from './components/Header';
import {Menu} from './components/Menu';
import {Home} from './components/Home';
import {One} from './components/One';
import {Two} from './components/Two';
import { MemoryGame } from './components/MemoryGame';

function App() {
  return (
    <div className="App">
     <Header />
      <Menu />
     <Home />
     <One/>
     <Two/>
     <MemoryGame />
    </div>
  );
}

export default App;
