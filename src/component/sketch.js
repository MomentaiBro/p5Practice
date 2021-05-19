import React from "react";
import Sketch from "react-p5";


// CIRCLE LEAVING IMPRINT
// let speed = 2.5;
// let diameter = 20;
// let x;
// let y;

let angle = 0.0;
let offset = 60;
let scalar = 2;
let speed = .15;


export default (props) => {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		
		// CIRCLE LEAVING IMPRINT
		// p5.createCanvas(500, 250).parent(canvasParentRef);
		// x = p5.width / 2;
		// y = p5.height / 2;
		// p5.background(204);

		p5.createCanvas(240, 240).parent(canvasParentRef);
		p5.fill(0);
		p5.background(204);
	};

	const draw = (p5) => {

		let x = offset + p5.cos(angle) * scalar;
		let y = offset + p5.sin(angle) * scalar;
		p5.ellipse(x, y, 2, 2);
		angle += speed;
		scalar += speed;

		

		// CIRCLE LEAVING INPRINT
		// x += p5.random(-speed, speed);
		// y += p5.random(-speed, speed);
		// p5.ellipse(x, y, diameter, diameter);




		// RANDOM LINE GENERATOR
		// p5.background(204);
		// for (let x = 20; x < p5.width; x += 20){
		// 	let mx = p5.mouseX / 10;
		// 	let offsetA = p5.random(-mx, mx);
		// 	let offsetB = p5.random(-mx, mx);
		// 	p5.line(x + offsetA, 20, x - offsetB, 100); 
		// };
		
		
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes
	};

	return (
    <main className="sketch-container">
        <Sketch setup={setup} draw={draw} />
    </main>    
    ) 
};