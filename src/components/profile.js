import React from "react";
import PropTypes from "prop-types";
import { RiShareForwardLine } from "react-icons/ri";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Profile = ({ profInfo }) => {
	return (
		<>
			<div className="icons">
				<div className="iconShareWrapper arrow">
					<RiShareForwardLine style={{ color: "#98A2B3" }} />
				</div>
				<div className="iconShareWrapper dots">
					<BiDotsHorizontalRounded style={{ color: "#98A2B3" }} />
				</div>
			</div>

			<div className="profSection">
				<img
					id={profInfo.id}
					src={require("../" + profInfo.url)}
					alt="Profile"
				/>
				<p className="profText">{profInfo.btnText}</p>
			</div>
		</>
	);
};

Profile.propTypes = {
	id: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	btnText: PropTypes.string.isRequired,
};

export default Profile;
