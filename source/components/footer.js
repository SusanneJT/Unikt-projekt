import React from "react";


export class Footer extends React.Component {
	render() {
        const styleDiv = {
            marginTop: "4vw",
            height: "15vw",
            padding: "8px",
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
		return (
            <div style={styleDiv}>
                <h2 style={styleH2}><span style={styleU}>U</span>nikt<span style={styleU}>.</span>se</h2>
                <hr style={{width: "50%", border: "1px solid #97A88B"}}/>
            </div>
		);
	}
}