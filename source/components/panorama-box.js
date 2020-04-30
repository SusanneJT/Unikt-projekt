import React from "react";
import { TextCircle } from "./text-circle";

export class PanoramaBox extends React.Component {
	render() {
        const styleDiv = {
            position: "relative",
            width: "100%"
        }
        const stylePic = {
            width: "100%"
          };
		return (
            <div class="panorama" style={styleDiv}>
			    <img src="/img/components/panorama-nature.jpg" style={stylePic}/>
                <TextCircle />
		    </div>
		);
	}
}