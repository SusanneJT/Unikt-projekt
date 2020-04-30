import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from "./home";
import { About } from "./about";


export class AppRouter extends React.Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Unikt.se</h2>
          <nav>
          <ul>
            <li><Link to={'/'}> Home </Link></li>
            <li><Link to={'/about'}>About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

//export default AppRouter;