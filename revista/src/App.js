import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/Header';
import {Menu} from './components/Menu';

function App() {
  return (
    <div className="App">
     <Header />
     <Menu />
    </div>
  );
}

export default App;
