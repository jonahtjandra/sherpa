import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { Topbar } from './Components/Topbar/Topbar';
import { Destination } from './Components/Destination/Destination';

function App() {
  return (
    <div className="App">
        <Topbar/>
        <Home />
        <Destination id="destination"/>
        <About/>
    </div>
  );
}

export default App;
