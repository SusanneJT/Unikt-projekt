import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export class Menu extends React.Component {
	render() {
        const styleLinks = {
            display: "inline-block",
            padding: "10px",
            color: "#1E2F13",
            textDecoration: "none",
            fontSize: "1.6vW",
            fontFamily: "Arial",
            fontWeight: "200",
            marginTop: "-20%",
        }
        const styleH2 = {
            color: "#97A88B",
            fontSize: "4.8vW",
            fontFamily: "Arial",
            textAlign: "center"
        }
        const styleU = {
            color: "#1E2F13",
            fontSize: "6vw",
        }
        const styleCart = {
            color: "gray",
            fontSize: "3.5vw",
            position: "absolute",
            top: "10px",
            right: "45px",
            width:"70px",
            opacity: "0.7",
        }
		return (
            <div>
                <Link to={'/addProductPage'}> 
                    <Button style={{margin: "1vw"}} variant="outline-secondary" size="sm">Lägg till produkt</Button>
                </Link>
                <FontAwesomeIcon style={styleCart} icon={faShoppingCart } />
                <Link style={{textDecoration: "none"}} to={'/app.html'}> 
                    <h2 style={styleH2}><span style={styleU}>U</span>nikt<span style={styleU}>.</span>se</h2>
                    <hr style={{width: "50%"}}/>
                </Link>
                <nav style={{textAlign: "center"}}>
                <ul>
                    <li style={styleLinks}><Link style={styleLinks} to={'/dam'}>Dam</Link></li>
                    <li style={styleLinks}><Link style={styleLinks} to={'/herr'}>Herr</Link></li>
                    <li style={styleLinks}><Link style={styleLinks} to={'/barn'}>Barn</Link></li>
                    <li style={styleLinks}><Link style={styleLinks} to={'/accessoarer'}>Accessoarer</Link></li>
                    <li style={styleLinks}><Link style={styleLinks} to={'/inredning'}>Inredning</Link></li>
                </ul>
                </nav>
            </div>
		);
	}
}