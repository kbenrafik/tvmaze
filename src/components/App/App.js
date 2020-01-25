import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {
  ShowPage,
  EpisodePage,
  HomePage
} from '../Pages';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/show/:idShow/episode/:id">
          <EpisodePage/>
        </Route>
        <Route path="/show/:id">
          <ShowPage/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
