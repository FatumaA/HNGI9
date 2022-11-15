import React from "react";
import { Button } from "@chakra-ui/react";

const ButtonWrapper = ({
	title,
	isPrimary = true,
	width = "200px",
	onClick,
}) => {
	console.log(onClick);
	return (
		<Button
			onClick={onClick}
			w={width}
			fontWeight="400"
			colorScheme={isPrimary ? "pink" : "white"}
		>
			{title}
		</Button>
	);
};

export default ButtonWrapper;
