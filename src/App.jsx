import * as React from 'react';
import withRoot from './modules/withRoot';
import Router from './router/router';

function App() {
  return (
    <Router/>
  );
}

export default withRoot(App);
