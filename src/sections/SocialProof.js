import React from "react";
import { HStack, Text, Image, Stack } from "@chakra-ui/react";

export const SocialProof = () => {
	return (
		<Stack
			direction="row"
			p={["2", "4"]}
			align="stretch"
			justify={["space-evenly", "space-around"]}
			backgroundColor="#A02279"
		>
			<HStack>
				<Image
					maxHeight={["20px", "40px"]}
					src={require("../images/mbtoken.png")}
					alt="mbtoken logo"
				/>

				<Text
					color="white"
					fontSize={["18px", "24px", "32px"]}
					fontWeight="700"
				>
					MBToken
				</Text>
			</HStack>
			<HStack>
				<Image
					maxHeight={["20px", "40px"]}
					src={require("../images/metamask.png")}
					alt="metamask logo"
				/>
				<Text
					color="white"
					fontSize={["18px", "24px", "32px"]}
					fontWeight="300"
					letterSpacing="widest"
				>
					METAMASK
				</Text>
			</HStack>
			<HStack>
				<Image
					maxHeight={["20px", "40px"]}
					src={require("../images/opensea.png")}
					alt="opensea logo"
				/>
				<Text
					color="white"
					fontSize={["18px", "24px", "32px"]}
					fontWeight="700"
				>
					OpenSea
				</Text>
			</HStack>
		</Stack>
	);
};
