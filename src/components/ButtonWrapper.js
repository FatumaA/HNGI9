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
			backgroundColor={isPrimary ? "pink.700" : "white"}
			color={isPrimary ? "white" : "pink.700"}
		>
			{title}
		</Button>
	);
};

export default ButtonWrapper;
