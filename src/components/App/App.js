import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {
  ShowPage,
  EpisodePage
} from '../Pages';


const App = () => {
  return (
    <Router>
      <Switch>
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
