import React from "react";

const Footer = () => {
	return (
		<div className="footerWrapper">
			<footer>
				<img
					src={require("../zuri.png")}
					alt="Zuri logo"
					className="footerImg zuri"
				/>
				<p className="footerText">HNG Internship 9 Frontend Task</p>
				<img
					src={require("../I4G.png")}
					alt="Ingressive for Good logo"
					className="footerImg i4g"
				/>
			</footer>
		</div>
	);
};

export default Footer;
