import React from "react";
import { ProductGallery } from "./Product/productGallery";

export class Accessoarer extends React.Component {
	render() {
		return (
			<div>
				<ProductGallery category={"Accessoarer"} />
			</div>
			
		);
	}
}