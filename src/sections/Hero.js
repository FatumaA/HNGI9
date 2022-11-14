import React from "react";
import {
	VStack,
	Text,
	Input,
	HStack,
	Image,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import ButtonWrapper from "../components/ButtonWrapper";

const Hero = () => {
	return (
		<HStack spacing={24} mt="20" mb="30">
			<VStack spacing={8} w="50%">
				<Text fontSize="5xl" fontWeight="bold">
					Rent a place away from home in the metaverse
				</Text>
				<Text fontSize="2xl">
					We provide you access to luxury and affordable houses in the
					metaverse, get a chance to turn your imagination to reality at your
					comfort zone
				</Text>
				<HStack w="100%">
					<InputGroup>
						<Input />
						<InputRightElement
							w="auto"
							children={<ButtonWrapper title="Search" />}
						/>
					</InputGroup>
				</HStack>
			</VStack>
			<HStack>
				<VStack mt="150">
					<Image src={require("../images/hero1.png")} alt="hero img 1" />
					<Image src={require("../images/hero2.png")} alt="hero img 2" />
				</VStack>
				<VStack mb="100">
					<Image src={require("../images/hero3.png")} alt="hero img 3" />
					<Image src={require("../images/hero4.png")} alt="hero img 4" />
				</VStack>
			</HStack>
		</HStack>
	);
};

export default Hero;
