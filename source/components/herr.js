import React from "react";
import {RenderProducts} from "./Product/renderProduct";

export class Herr extends React.Component {
	render() {
		return (
			<div>
				<h1>Herr</h1>
                <RenderProducts category={"Herr"}/>
			</div>
		);
	}
}