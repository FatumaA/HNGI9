import React from "react";
import {
	Container,
	HStack,
	InputGroup,
	Text,
	Input,
	Image,
	InputRightAddon,
	Spacer,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const NFTPlaces = () => {
	return (
		<>
			<Container maxWidth="1200px">
				<Navbar />
				<HStack
					spacing={4}
					mt="10"
					mb="10"
					pt="32"
					justifyContent="space-between"
				>
					<Text>Restaurant</Text>
					<Text>Cottage</Text>
					<Text>Castle</Text>
					<Text>Fantast city</Text>
					<Text>Beach</Text>
					<Text>Carbins</Text>
					<Text>Off-grid</Text>
					<Text>Farm</Text>
					<InputGroup w="auto">
						<Input type="text" placeholder="Location" />
						<InputRightAddon
							bgColor="transparent"
							children={
								<Image
									src={require("../images/correct-filter-icon.png")}
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
