import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

//Components
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
