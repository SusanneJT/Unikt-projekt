import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Menu extends React.Component {
	render() {
        const styleLinks = {
            display: "inline-block",
            padding: "10px",
            color: "#1E2F13",
            textDecoration: "none",
            fontSize: "1.8vW",
            fontFamily: "Arial",
            fontWeight: "200",
            marginTop: "-10%",
        }
        const styleH2 = {
            color: "#97A88B",
            fontSize: "4.8vW",
            fontFamily: "Arial",
            textAlign: "center"
        }
		return (
            <div>
                <Link to={'/addProductPage'}> 
                    <button>Lägg till produkt</button>
                </Link>
                <Link style={{textDecoration: "none"}} to={'/app.html'}> 
                    <h2 style={styleH2}>Unikt.se</h2>
                </Link>
                <nav style={{textAlign: "center"}}>
                <ul>
                    <li style={styleLinks}><Link style={styleLinks} to={'/dam'}>Dam</Link></li>
                    <li style={styleLinks}><Link style={styleLinks} to={'/herr'}>Herr</Link></li>
                    <li style={styleLinks}><Link style={styleLinks} to={'/barn'}>Barn</Link></li>
                </ul>
                </nav>
            </div>
		);
	}
}