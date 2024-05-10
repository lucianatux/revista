import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Home } from "./components/Home";
import { One } from "./components/One";
import { Two } from "./components/Two";
import { Three } from "./components/Three";
import { MemoryGame } from "./components/MemoryGame";
import { Aboutus } from "./components/Aboutus";
import { Workshops } from "./components/Workshops";
import { Phrases } from "./components/Phrases";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Phrases />
      <Home />
      <One />
      <Two />
      <Three />
      <MemoryGame />
      <Aboutus />
      <Workshops />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
