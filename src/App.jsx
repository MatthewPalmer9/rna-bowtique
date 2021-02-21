import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './containers/Navbar.jsx';
import Landing from './containers/Landing.jsx';
import Footer from './containers/Footer.jsx';

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
        <Footer />
      </Router>
    </>
  );
}

export default App;
