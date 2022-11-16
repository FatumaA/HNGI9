import React from "react";
import { VStack, Image, Text, Container, Stack } from "@chakra-ui/react";
import ButtonWrapper from "../components/ButtonWrapper";

const MetaBnbInfo = () => {
	return (
		<Container maxWidth="1200px" py="10">
			<Stack
				direction={["column", "row"]}
				spacing={["4", "14", "32"]}
				mx={["4", "6", "0"]}
			>
				<VStack spacing={8} align="start">
					<Text fontSize={["2xl", "3xl"]} color="white" fontWeight="bold">
						Metabnb NFTs
					</Text>
					<Text
						color="white"
						lineHeight="8"
						maxWidth={["fit-content ", "350px"]}
					>
						Discover our NFT gift cards collection. Loyal customers gets amazing
						gift cards which are traded as NFTs. These NFTs gives our cutomer
						access to loads of our exclusive services.
					</Text>
					<ButtonWrapper title="Metabnb NFTs" isPrimary={false}></ButtonWrapper>
				</VStack>
				<VStack maxHeight="800px">
					<Image
						maxHeight="600px"
						src={require("../images/three-images.png")}
						alt="nft home"
						mr="2"
					/>
				</VStack>
			</Stack>
		</Container>
	);
};

export default MetaBnbInfo;
