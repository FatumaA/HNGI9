import React from "react";
import { HStack, VStack, Image, Text, Container } from "@chakra-ui/react";
import ButtonWrapper from "../components/ButtonWrapper";

const MetaBnbInfo = () => {
	return (
		<Container maxWidth="1200px">
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
					<ButtonWrapper title="Metabnb NFTs"></ButtonWrapper>
				</VStack>
				<VStack maxHeight="600px">
					<Image
						maxHeight="200px"
						src={require("../images/nftpurple.png")}
						alt="nft home 1"
						mt="100px"
					/>
					<Image
						maxHeight="200px"
						src={require("../images/nftgreen.png")}
						mb="-100px"
						alt="nft home 1"
						// style={{ zIndex: 1 }}
					/>
					<Image
						maxHeight="200px"
						src={require("../images/nftorange.png")}
						alt="nft home 1"
						// ml="2000px"
						// style={{ zIndex: 2 }}
					/>
				</VStack>
			</HStack>
		</Container>
	);
};

export default MetaBnbInfo;
