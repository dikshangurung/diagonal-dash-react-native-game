import Matter from "matter-js";
import React from "react";
import { View } from "react-native";
const Square = (props) => {
	const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
	const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;
	const xBody = props.body.position.x - widthBody / 2;
	const yBody = props.body.position.y - heightBody / 2;
	const color = props.color;
	return (
		<View
			style={{
				borderWidth: 1,
				backgroundColor: color,
				borderStyle: "solid",
				position: "absolute",
				left: xBody,
				top: yBody,
				width: widthBody,
				height: heightBody,
			}}
		/>
	);
};
export default (world, color, pos, size) => {
	const initialSquare = Matter.Bodies.rectangle(
		pos.x,
		pos.y,
		size.width,
		size.height,
		{ label: "Square" }
	);
	Matter.World.add(world, initialSquare);
	return {
		body: initialSquare,
		color,
		pos,
		renderer: <Square />,
	};
};
