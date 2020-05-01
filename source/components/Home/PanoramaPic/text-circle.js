import React from "react";

export class TextCircle extends React.Component {
	render() {
        const styleCircle = {
            position: "absolute",
		    top: "10%",
		    left: "5%",
		    backgroundImage: "linear-gradient(to right,#97A88B, #E9E9E9, #97A88B)",
		    width: "150pt",
		    height: "80pt",
		    borderRadius: "50%",
		    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
		    padding: "20pt",
		    boxSizing: "border-box"
		  };
		  const styleH2 = {
			position: "absolute",
			top: "6%",
			left: "20%",
			width: "100%",
			color: "#1E2F13",
			fontSize: "1.6em",
			fontFamily: "garamond",
			fontWeight: "200"
		  }
		return (
			<div className="text-circle" style={styleCircle}>
				<h2 style={styleH2}>En liten text<br /> ..och lite till</h2>
			</div>
		);
	}
}