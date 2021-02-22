import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './containers/Navbar.jsx';
import Landing from './containers/Landing.jsx';
import Footer from './containers/Footer.jsx';
import Shop from './components/Shop.jsx';

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

            {/* Shop Page */}
            <Route exact path="/shop" render={props => (
              <Shop
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
