import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
