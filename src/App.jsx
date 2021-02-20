import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './containers/Navbar.jsx';
import Landing from './containers/Landing.jsx';

function App(props) {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>

            {/* Landing Page */}
            <Route exact path="/" render={props => (
              <Landing
                {...props}
              />
            )} />


          </Switch>
      </Router>
    </>
  );
}

export default App;
