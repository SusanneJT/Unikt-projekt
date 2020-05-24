import React from "react";

export class TextBanner extends React.Component {
	render() {
        const styleBanner = {
            width: "100%",
            height: "36pt",
            backgroundColor: "#97A88B",
            textAlign: "center",
            marginTop: "-8pt",
            paddingTop: "11pt",
            marginBottom: "13pt",
        }
		return (
            <div style={styleBanner}>
			    <p style={{color: "white"}}>Just nu! Fri frakt vid beställning över 500kr!</p>
		    </div>
		);
	}
}