import React from "react";

export class TextCircle extends React.Component {
	render() {
        const styleCircle = {
            position: "absolute",
		    left: "5%",
		    backgroundImage: "linear-gradient(to right,#97A88B, #E9E9E9, #97A88B)",
		    width: "22%",
		    height: "35%",
		    borderRadius: "50%",
		    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
			boxSizing: "border-box",
			paddingTop: "20px"
		  };
		  const styleH = {
			color: "#1E2F13",
			fontFamily: "garamond",
			fontWeight: "200",
			textAlign: "center"
		  }
		return (
			<div className="text-circle" style={styleCircle}>
				<h2 style={styleH}>För dig </h2> <h5 style={styleH}>..och en mer hållbar framtid</h5>
			</div>
		);
	}
}