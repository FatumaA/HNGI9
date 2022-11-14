import { HStack, Text, Image } from "@chakra-ui/react";
import React from "react";

const SocialProof = () => {
	return (
		<HStack
			p="4"
			align="stretch"
			justify="space-between"
			backgroundColor="#A02279"
		>
			<HStack>
				<Image src={require("../images/mbtoken.png")} alt="mbtoken logo" />
				<Text color="white" fontWeight="bold">
					MBToken
				</Text>
			</HStack>
			<HStack>
				<Image src={require("../images/metamask.png")} alt="metamask logo" />
				<Text color="white" fontWeight="bold">
					METAMASK
				</Text>
			</HStack>
			<HStack>
				<Image src={require("../images/opensea.png")} alt="opensea logo" />
				<Text color="white" fontWeight="bold">
					OpenSea
				</Text>
			</HStack>
		</HStack>
	);
};

export default SocialProof;
