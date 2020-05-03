import React from "react";
import { ProductGallery } from "./Product/productGallery";

export class Barn extends React.Component {
	render() {
		return (
			<div>
                <ProductGallery category={"Barn"} />
			</div>
		);
	}
}