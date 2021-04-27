import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Settings from './views/Settings';
import { useContext } from 'react';
import { Context } from './context';
import Home from './views/Home';

function App() {
  const [state] = useContext(Context);

  return (
    <Router>
      <div
        className="container"
        style={{ minHeight: '100vh', backgroundColor: state.primary }}
      >
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
