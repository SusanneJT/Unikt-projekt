import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Menu extends React.Component {
	render() {
        const styleLinks = {
            display: "inline-block",
            padding: "20px",
            color: "#1E2F13",
            textDecoration: "none",
            fontSize: "1.1em",
            fontFamily: "Arial"
        }
        const styleH2 = {
          color: "#97A88B",
          fontSize: "2.1em",
          fontFamily: "Arial"
        }
		return (
            <div style={{textAlign: "center"}}>
                <Link to={'/app.html'}> 
                <h2 style={styleH2}>Unikt.se</h2>
                </Link>
                <nav>
                <ul>
                    <li style={styleLinks}><Link to={'/dam'}>Dam</Link></li>
                    <li style={styleLinks}><Link to={'/herr'}>Herr</Link></li>
                    <li style={styleLinks}><Link to={'/barn'}>Barn</Link></li>
                </ul>
                </nav>
                <hr /> 
            </div>
		);
	}
}