import React from "react";
import { Container } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NFTPlaces = () => {
	return (
		<>
			<Container maxWidth="1200px" centerContent>
				<Navbar />
			</Container>
			<div style={{ backgroundColor: "black" }}>
				<Footer />
			</div>
		</>
	);
};

export default NFTPlaces;
