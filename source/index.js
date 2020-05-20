import React from "react";
import ReactDOM from "react-dom";
import { AppRouter } from "./components/app-router";
import 'bootstrap/dist/css/bootstrap.min.css';


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<AppRouter />, wrapper) : false;