import React from "react";
import {
	VStack,
	Text,
	Input,
	HStack,
	Image,
	InputGroup,
	InputRightElement,
	Container,
} from "@chakra-ui/react";
import ButtonWrapper from "../components/ButtonWrapper";

const Hero = () => {
	return (
		<Container maxWidth="1200px">
			<HStack spacing={32} mt="10" mb="100" pt="24">
				<VStack spacing={8} w="50%" mt="14">
					<Text fontSize="5xl" fontWeight="bold">
						Rent a Place away from Home in the Metaverse
					</Text>
					<Text fontSize="2xl" fontWeight="400">
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
		</Container>
	);
};

export default Hero;
