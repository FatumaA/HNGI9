import React from "react";
import { Container, Text } from "@chakra-ui/react";
import Card from "../components/Card";

const NFTs = () => {
	return (
		<Container maxWidth="1200px" mb="20">
			<Text fontSize="4xl" align="center" mt="40px" mb="40px" fontWeight="700">
				Inspiration for your next adventure
			</Text>
			{/* Insert cards here */}
			<Card />
		</Container>
	);
};

export default NFTs;
