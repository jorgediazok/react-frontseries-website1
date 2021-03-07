import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

//Components
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
