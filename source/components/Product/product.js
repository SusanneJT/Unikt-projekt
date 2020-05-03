import React from "react";

export class Product extends React.Component {
	render() {
        const name = this.props.name;
        const price = this.props.price;

        const productDiv = {
            float: "left",
            margin: "1%",
            width: "16%",
            textAlign: "center"
        }
        const buttonStyle = {
            padding:"3%",
            width: "40%",
            backgroundColor: "#97A88B",
            fontSize: "1.3vW",
			fontFamily: "garamond",
        }
          
		return (
            <div style={productDiv}>
                <img src="https://via.placeholder.com/180x220" />
                <div>
                    <h5>{name}</h5>
                    <button style={buttonStyle}>{price}:-</button>
                </div>
            </div>
		);
	}
}