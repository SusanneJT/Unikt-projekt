import React from "react";
//import {RenderProducts} from "./Product/renderProduct";
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