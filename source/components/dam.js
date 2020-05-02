import React from "react";
import {RenderProducts} from "./Product/renderProduct";

export class Dam extends React.Component {
	render() {
		return (
			<div>
				<h1>Dam</h1>
				<RenderProducts category={"Dam"} />
			</div>
			
		);
	}
}