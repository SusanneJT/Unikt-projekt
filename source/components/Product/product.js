import React from "react";

export class Product extends React.Component {
	render() {
        const name = this.props.name;
        const price = this.props.price;

        const productDiv = {
            width: "250px",
            border: "1px solid #E9E9E9",
            padding: "8px"
        }
          
		return (
            <div style={productDiv}>
                <img src="https://via.placeholder.com/250x140" />
                <div>
                    <h5>{name}</h5>
                    <button>{price}:-</button>
                </div>
            </div>
		);
	}
}