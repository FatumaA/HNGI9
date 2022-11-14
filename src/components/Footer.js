import React from "react";
import {
	Container,
	VStack,
	Image,
	Grid,
	GridItem,
	Text,
	HStack,
} from "@chakra-ui/react";

const Footer = () => {
	return (
		<Container maxWidth="1200px" color="white" pt="20" pb="10">
			<Grid templateColumns="repeat(4, 1fr)" gap={24}>
				<VStack align="start" mr="2.5">
					<Image src={require("../images/logo-white.png")} mb="20" />
					<HStack spacing={10}>
						<Image src={require("../images/fb-icon.png")} />
						<Image src={require("../images/insta-icon.png")} />
						<Image src={require("../images/twitter-icon.png")} />
					</HStack>
					<HStack pt="20">
						<Image src={require("../images/copyright-icon.png")} />
						<Text>2022 Metabnb</Text>
					</HStack>
				</VStack>
				<VStack align="start">
					<Text fontWeight="bold" id="community" mb="24px">
						Community
					</Text>
					<Text>NFT</Text>
					<Text>Tokens</Text>
					<Text>Landlords</Text>
					<Text>Discord</Text>
				</VStack>
				<VStack align="start">
					<Text fontWeight="bold" mb="24px">
						Places
					</Text>
					<Text>Castle</Text>
					<Text>Farm</Text>
					<Text>Beach</Text>
					<Text>Learn more</Text>
				</VStack>
				<VStack align="start">
					<Text fontWeight="bold" mb="24px">
						About us
					</Text>
					<Text>Road map</Text>
					<Text>Creators</Text>
					<Text>Careers</Text>
					<Text>Contact us</Text>
				</VStack>
			</Grid>
		</Container>
	);
};

export default Footer;
