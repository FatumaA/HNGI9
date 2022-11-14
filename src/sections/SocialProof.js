import { HStack, Text, Image, Container } from "@chakra-ui/react";
import React from "react";

const SocialProof = () => {
	return (
		<HStack
			p="4"
			align="stretch"
			justify="space-around"
			backgroundColor="#A02279"
		>
			<HStack>
				<Image src={require("../images/mbtoken.png")} alt="mbtoken logo" />
				<Text color="white" fontSize="32px" fontWeight="700">
					MBToken
				</Text>
			</HStack>
			<HStack>
				<Image src={require("../images/metamask.png")} alt="metamask logo" />
				<Text
					color="white"
					fontSize="32px"
					fontWeight="300"
					letterSpacing="widest"
				>
					METAMASK
				</Text>
			</HStack>
			<HStack>
				<Image src={require("../images/opensea.png")} alt="opensea logo" />
				<Text color="white" fontSize="32px" fontWeight="700">
					OpenSea
				</Text>
			</HStack>
		</HStack>
	);
};

export default SocialProof;
