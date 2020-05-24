import React from "react";
import { ProductGallery } from "./Product/productGallery";
import { Footer } from "./footer";

export class Dam extends React.Component {
	render() {
		return (
			<div>
				<ProductGallery category={"Dam"} />
				<Footer />
			</div>
			
		);
	}
}