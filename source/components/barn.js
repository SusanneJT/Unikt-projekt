import React from "react";
import {RenderProducts} from "./Product/renderProduct";

export class Barn extends React.Component {
	render() {
		return (
			<div>
				<h1>Barn</h1>
                <RenderProducts category={"Barn"} />
			</div>
		);
	}
}