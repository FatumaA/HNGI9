import React from "react";
import btnData from "../data.json";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import AnchorBtn from "./AnchorBtn";
import SocialSection from "./SocialSection";
import Footer from "./Footer";

const Home = (props) => {
	const profInfo = {
		id: "profile__img",
		url: "profile.png",
		btnText: "Annette Black",
	};
	return (
		<>
			<div className="App">
				<Profile profInfo={profInfo} />
				{btnData.map((data) => (
					<AnchorBtn btnInfo={data} />
				))}
				<Link to="/contact" id="contact" className="anchorBtn">
					<p>Contact Me</p>
				</Link>
				<SocialSection />
			</div>
			<Footer />
		</>
	);
};

export default Home;
