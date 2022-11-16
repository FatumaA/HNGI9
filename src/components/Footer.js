import React from "react";
import { Container, VStack, Image, Grid, Text, HStack } from "@chakra-ui/react";

export const Footer = () => {
	return (
		<Container maxWidth="1200px" color="white" pt="20" pb="10">
			<Grid
				templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
				gap={["6", "10", "24"]}
			>
				<VStack align="start" mr="2.5">
					<Image
						maxHeight="8"
						src={require("../images/logo-white.png")}
						onClick={() => (window.location.href = "/")}
						mb={["2", "4", "20"]}
					/>
					<HStack spacing={["2", "4", "10"]}>
						<Image src={require("../images/fb-icon.png")} />
						<Image src={require("../images/insta-icon.png")} />
						<Image src={require("../images/twitter-icon.png")} />
					</HStack>
					<HStack pt={["2", "4", "20"]}>
						<Image src={require("../images/copyright-icon.png")} />
						<Text>2022 Metabnb</Text>
					</HStack>
				</VStack>
				<VStack align="start">
					<Text fontWeight="bold" id="community" mb={["-1", "2", "8"]}>
						Community
					</Text>
					<Text>NFT</Text>
					<Text>Tokens</Text>
					<Text>Landlords</Text>
					<Text>Discord</Text>
				</VStack>
				<VStack align="start">
					<Text fontWeight="bold" mb={["-1", "2", "8"]}>
						Places
					</Text>
					<Text>Castle</Text>
					<Text>Farm</Text>
					<Text>Beach</Text>
					<Text>Learn more</Text>
				</VStack>
				<VStack align="start">
					<Text fontWeight="bold" mb={["-1", "2", "8"]}>
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
