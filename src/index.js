import { WebGLMap } from "@luciad/ria/view/WebGLMap";
import { getReference } from "@luciad/ria/reference/ReferenceProvider";

import "./index.scss";

const root = document.getElementById("root");

const element = document.createElement("div");

element.classList.add("MessageBox");
element.innerText = "Hello world! From Webpack!";
console.log("Hello world! From Webpack!")
root.appendChild(element);

// Create an new html element to hold the map. Assing a class name so we can easy style it with css.
const mapElement = document.createElement("div");
mapElement.classList.add("MyLuciadMap");  
root.appendChild(mapElement);

// Create the map and fit to bounds
const map = new WebGLMap(mapElement, { reference: getReference("EPSG:4978") });