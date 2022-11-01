import React from "react";
import { FaSlack, FaGithub } from "react-icons/fa";

const SocialSection = () => {
	return (
		<div class="iconWrapper">
			<FaSlack
				style={{ "margin-right": 10, cursor: "pointer" }}
				onClick={() => (window.location.href = "https://hng9.slack.com")}
			/>
			<FaGithub
				style={{ cursor: "pointer" }}
				onClick={() => (window.location.href = "https://github.com/FatumaA")}
			/>
		</div>
	);
};

export default SocialSection;
