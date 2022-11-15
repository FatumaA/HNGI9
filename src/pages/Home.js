import React from "react";
import { Container } from "@chakra-ui/react";
import MetaBnbInfo from "../sections/MetaBnbInfo";
import Hero from "../sections/Hero";
import SocialProof from "../sections/SocialProof";
import NFTs from "../sections/NFTs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div style={{ width: "100%" }}>
			<Container maxWidth="1200px">
				<Navbar />
			</Container>
			<Hero />
			<SocialProof />
			<NFTs />
			<div style={{ backgroundColor: "#A02279" }}>
				<MetaBnbInfo />
			</div>
			<div style={{ backgroundColor: "black" }}>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
