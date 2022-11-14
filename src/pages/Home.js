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
		<>
			<Container maxWidth="1300px" centerContent>
				<Navbar />
				<Hero />
			</Container>
			<div style={{ width: "100%" }}>
				<SocialProof />

				<NFTs />
				<MetaBnbInfo />
				<Footer />
			</div>
		</>
	);
};

export default Home;
