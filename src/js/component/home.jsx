import React from "react";
import { useState } from "react";


//create your first component
const TrafficLight = () => {

	const [color, setColor] = useState(null)

	return (
		<>
			<div id="cable"></div>
			<div id="trafficLight">
				<div id="redCircle" onClick={() => setColor("red")} className={color == "red" ? "redShadow" : null}></div>
				<div id="yellowCircle" onClick={() => setColor("yellow")} className={color == "yellow" ? "yellowShadow" : null}></div>
				<div id="greenCircle" onClick={() => setColor("green")} className={color == "green" ? "greenShadow" : null}></div>
			</div>
			<p id="name" className={color == "red" ? "redText" : color == "yellow" ? "yellowText" : color == "green" ? "greenText" : null}>Made by Yohan Mayorga</p>
		</>
	);
};

export default TrafficLight;
