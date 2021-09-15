import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Create from './views/Create';
import Dashboard from './views/Dashboard';
import Details from './views/Details'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Create />
          <Dashboard />
        </Route>
        <Route exact path="/products/:id">
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;