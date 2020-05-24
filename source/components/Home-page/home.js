import React from "react";
import { PanoramaBox } from "./PanoramaPic/panorama-box";
import { TextBanner } from "./textBanner";
import { ControlledCarousel } from "./carousel";
import { CircleMenu } from "./circleMenu";
import { Footer } from "../footer";


export class Home extends React.Component {
	render() {
		return (
			<div>
				<PanoramaBox />
				<TextBanner />
				<CircleMenu />
				<ControlledCarousel />
				<Footer />
			</div>
		);
	}
}