import React from "react";
import { Button } from "@chakra-ui/react";

const ButtonWrapper = ({ title, isPrimary = true }) => {
	return <Button colorScheme={isPrimary ? "pink" : "white"}>{title}</Button>;
};

export default ButtonWrapper;
