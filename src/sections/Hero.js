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
	Stack,
} from "@chakra-ui/react";
import ButtonWrapper from "../components/ButtonWrapper";

const Hero = () => {
	return (
		<Container maxWidth="1200px">
			<Stack
				direction={["column", "row"]}
				spacing={["2", "14", "32"]}
				mt="10"
				mb={["14", "100"]}
				pt="24"
				mx={["4", "6", "0"]}
			>
				<VStack
					spacing={8}
					w={["100%", "50%"]}
					mt={["4", "14"]}
					mb={["4", "0"]}
				>
					<Text fontSize={["3xl", "3xl", "5xl"]} fontWeight="bold">
						Rent a {""}
						<div style={{ color: "#97266D", display: "inline" }}>Place</div>
						{""} away from {""}
						<div style={{ color: "#97266D", display: "inline" }}>Home</div> {""}{" "}
						in the
						{""}{" "}
						<div style={{ color: "#97266D", display: "inline" }}>Metaverse</div>
					</Text>
					<Text fontSize={["large", "large", "2xl"]} fontWeight="400">
						We provide you access to luxury and affordable houses in the
						metaverse, get a chance to turn your imagination to reality at your
						comfort zone
					</Text>
					<HStack w="100%">
						<InputGroup>
							<Input type="text" />
							<InputRightElement
								w="auto"
								children={<ButtonWrapper title="Search" />}
							/>
						</InputGroup>
					</HStack>
				</VStack>
				<HStack alignItems={["center", "center", "start"]} mt="20">
					<VStack mt={["14", "20", "20"]}>
						<Image src={require("../images/hero1.png")} alt="hero img 1" />
						<Image src={require("../images/hero2.png")} alt="hero img 2" />
					</VStack>
					<VStack mb={["3", "40", "200"]}>
						<Image src={require("../images/hero3.png")} alt="hero img 3" />
						<Image src={require("../images/hero4.png")} alt="hero img 4" />
					</VStack>
				</HStack>
			</Stack>
		</Container>
	);
};

export default Hero;
