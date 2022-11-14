import React from "react";
import {
	Container,
	HStack,
	InputGroup,
	Text,
	Input,
	InputRightElement,
	Image,
	InputRightAddon,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const NFTPlaces = () => {
	return (
		<>
			<Container maxWidth="1200px" mb="20">
				<Navbar />
				<HStack spacing={4} mt="20" mb="10" justifyContent="space-between">
					<Text>Restaurant</Text>
					<Text>Cottage</Text>
					<Text>Castle</Text>
					<Text>Fantast city</Text>
					<Text>Beach</Text>
					<Text>Carbins</Text>
					<Text>Off-grid</Text>
					<Text>Farm</Text>
					<InputGroup w="auto">
						<Input placeholder="Location" />
						<InputRightAddon
							bgColor="transparent"
							children={
								<Image
									src={require("../images/filter-icon.png")}
									alt="filter icon"
								/>
							}
						/>
					</InputGroup>
				</HStack>
				<Card isHomePage={false} />
			</Container>
			<div style={{ backgroundColor: "black" }}>
				<Footer />
			</div>
		</>
	);
};

export default NFTPlaces;
