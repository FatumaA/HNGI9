import React from "react";
import { Container } from "@chakra-ui/react";
import { MetaBnbInfo, Hero, SocialProof, NFTs } from "../sections/index";
import { Navbar, Footer, MobileMenu } from "../components/index";

const Home = () => {
	return (
		<div style={{ width: "100%" }}>
			<Container maxWidth="1200px">
				<Navbar />
				<MobileMenu />
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
