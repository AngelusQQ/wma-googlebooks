import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './pages/Books.js';
import NotFound from './pages/404.js';
import SavedBooks from './pages/SavedBooks.js';
import NavBar from './components/NavBar.js';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Books} />
        <Route exact path='/search' component={Books} />
        <Route exact path='/saved' component={SavedBooks} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
