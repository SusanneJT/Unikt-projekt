import React from "react";
import { ProductGallery } from "./Product/productGallery";

export class Inredning extends React.Component {
	render() {
		return (
			<div>
				<ProductGallery category={"Inredning"} />
			</div>
			
		);
	}
}