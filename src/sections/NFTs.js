import React from "react";
import { Container, Text } from "@chakra-ui/react";
import { Card } from "../components/index";

export const NFTs = () => {
	return (
		<Container maxWidth="1200px" mb="20" id="nfts">
			<Text
				fontSize={["2xl", "3xl", "4xl"]}
				align="center"
				mt="40px"
				mb="40px"
				fontWeight="700"
			>
				Inspiration for your next adventure
			</Text>
			<Card />
		</Container>
	);
};
