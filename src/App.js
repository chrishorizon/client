import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Create from './views/Create';
import Dashboard from './views/Dashboard';
import Details from './views/Details'
import Update from './views/Update'

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
        <Route exact path="/products/:id/edit">
          <Update />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;