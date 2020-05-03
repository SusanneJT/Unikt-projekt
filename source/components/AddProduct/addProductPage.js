import React from "react";
import { AddProductForm } from "./addProductForm";

export class AddProductPage extends React.Component {
	render() {
		const divStyle = {
			width: "40%", 
			margin:"0 30% 5% 30%",
			padding: "2%"
		}
		return (
			<div style={divStyle}>
				<AddProductForm/>
			</div>
			
		);
	}
}