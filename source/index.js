import React from "react";
import ReactDOM from "react-dom";
import { PanoramaBox } from "./components/panorama-box";


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<PanoramaBox />, wrapper) : false;