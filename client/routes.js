import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFound from './components/NotFound';
import Notes from './components/Notes';
import Note from './components/Note';
import SetNotes from './components/SetNotes';

export default (
  <Route>
    <Route path="/" component={App}>
      <Route component={SetNotes}>
        <IndexRoute component={Notes} />
        <Route path="/notes/:id" component={Note} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Route>
)
