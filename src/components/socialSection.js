import React from "react";
import { FaSlack, FaGithub } from "react-icons/fa";

const SocialSection = () => {
	return (
		<div className="iconWrapper">
			<FaSlack
				style={{ cursor: "pointer" }}
				onClick={() => (window.location.href = "https://hng9.slack.com")}
			/>
			<FaGithub
				style={{ cursor: "pointer" }}
				onClick={() =>
					(window.location.href =
						"https://github.com/FatumaA/hngi9/tree/Task-2---Add-Contact-to-LinkTree-clone")
				}
			/>
		</div>
	);
};

export default SocialSection;
