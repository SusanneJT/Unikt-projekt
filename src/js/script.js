import {affarsplan} from './modules/affarside.js';
import {homeDiv} from './modules/home.js';
import {projektDiv} from './modules/projektide.js';
import {inspirationDiv} from './modules/inspiration.js';

window.onload = Home;
document.getElementById("affarsplan").addEventListener("click", Affarsplan);
document.getElementById("projektide").addEventListener("click", Projektide);
document.getElementById("inspiration").addEventListener("click", Inspiration);
document.getElementById("home").addEventListener("click", Home);



function Home() {
    $("#content-box").empty();
    $(homeDiv).appendTo("#content-box");
}

function Affarsplan() {
    $("#content-box").empty();
    $(affarsplan).appendTo("#content-box");
}

function Projektide() {
    $("#content-box").empty();
    $(projektDiv).appendTo("#content-box");
}

function Inspiration() {
    $("#content-box").empty();
    $(inspirationDiv).appendTo("#content-box");
}

