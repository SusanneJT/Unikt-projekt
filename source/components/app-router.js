import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from "./Home/home";
import { Dam } from "./dam";
import { Herr } from "./herr";
import { Barn } from "./barn";
import { Menu } from "./menu";


export class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Switch>
              <Route exact path='/app.html' component={Home} />
              <Route path='/dam' component={Dam} />
              <Route path='/herr' component={Herr} />
              <Route path='/barn' component={Barn} />
          </Switch>
        </div> 
      </Router>
    );
  }
}



