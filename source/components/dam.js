import React from "react";
import { ProductGallery } from "./Product/productGallery";

export class Dam extends React.Component {
	render() {
		return (
			<div>
				<ProductGallery category={"Dam"} />
			</div>
			
		);
	}
}