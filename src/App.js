import './assets/scss/base.scss'

import Navbar from './components/Navbar';
import AddExpenses from './pages/AddExpenses';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddExpenses />
    </div>
  );
}

export default App;
