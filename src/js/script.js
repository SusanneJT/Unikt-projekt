import {affarsplan} from './modules/affarside.js';
import {homeDiv} from './modules/home.js';
import {projektDiv} from './modules/projektide.js';
import {inspirationDiv} from './modules/inspiration.js';

window.onload = Home;
document.getElementById("affarsplan").addEventListener("click", Affarsplan);
document.getElementById("projektide").addEventListener("click", Projektide);
document.getElementById("inspiration").addEventListener("click", Inspiration);
document.getElementById("home").addEventListener("click", Home);




function Affarsplan() {
    console.log("Du klickade på affärsidé");
    $("#content-box").empty();
    $(affarsplan).appendTo("#content-box");
}

function Projektide() {
    console.log("Du klickade på projektidé");
    $("#content-box").empty();
    $(projektDiv).appendTo("#content-box");
}

function Inspiration() {
    console.log("Du klickade på Inspiration");
    $("#content-box").empty();
    $(inspirationDiv).appendTo("#content-box");
}

function Home() {
    console.log("Du är hemma!");
    $("#content-box").empty();
    $(homeDiv).appendTo("#content-box");
}