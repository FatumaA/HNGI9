import React from "react";
import { HStack, VStack, Image, Text, Container } from "@chakra-ui/react";
import ButtonWrapper from "../components/ButtonWrapper";

const MetaBnbInfo = () => {
	return (
		<Container maxWidth="1200px" pt="20" pb="20">
			<HStack spacing={32}>
				<VStack spacing={8} align="start">
					<Text fontSize="4xl" color="white" fontWeight="bold">
						Metabnb NFTs
					</Text>
					<Text color="white" lineHeight="8" maxWidth="350px">
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
			</HStack>
		</Container>
	);
};

export default MetaBnbInfo;
