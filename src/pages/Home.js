import React from "react";
import MetaBnbInfo from "../sections/MetaBnbInfo";
import Hero from "../sections/Hero";
import SocialProof from "../sections/SocialProof";
import NFTs from "../sections/NFTs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<SocialProof />
			<NFTs />
			<MetaBnbInfo />
			<Footer />
		</div>
	);
};

export default Home;
