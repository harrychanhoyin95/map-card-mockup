import {
  Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header/Header'

import ListPage from "./pages/ListPage/ListPage";
import DetailPage from "./pages/DetailPage/DetailPage";

import history from './history'

import './App.css';

const App = () => {
  return (
    <Router history={history}>
      <div className="App">
        <Header  />
        <div className="container is-fluid px-3 pt-3 pb-6">
        <Switch>
          <Route path="/:userId">
            <DetailPage />
          </Route>
          <Route path="/" exact>
            <ListPage />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
