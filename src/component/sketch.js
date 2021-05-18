import React from "react";
import Sketch from "react-p5";

let x = 250;
let y = 250;

export default (props) => {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(800, 800).parent(canvasParentRef);
	};

	const draw = (p5) => {
		p5.background(34, 78, 132);
		p5.line(0, 800, 400, 400);
		p5.ellipse(x, y, p5.random(100), p5.random(25, 450));
		p5.triangle(x + 50, 750, 550, 800, 550, 600);
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes
		;
	};

	return (
    <main className="sketch-container">
        <Sketch setup={setup} draw={draw} />
    </main>    
    ) 
};