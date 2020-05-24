import React from "react";


export class Footer extends React.Component {
	render() {
        const styleDiv = {
            clear: "both",
            height: "15vw",
            padding: "8px",
            marginBottom: "6vw",
        }
        const styleH2 = {
            color: "#97A88B",
            fontSize: "4.8vW",
            marginTop: "7vw",
            fontFamily: "Arial",
            textAlign: "center"
        }
        const styleU = {
            color: "#1E2F13",
            marginTop: "7vw",
            fontSize: "6vw",
        }
		return (
            <div style={styleDiv}>
                <h2 style={styleH2}><span style={styleU}>U</span>nikt<span style={styleU}>.</span>se</h2>
                <hr style={{width: "50%", border: "1px solid #97A88B"}}/>
            </div>
		);
	}
}