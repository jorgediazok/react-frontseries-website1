import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components

import Home from './pages/Home';
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={SignInPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
