import React from "react";
import PropTypes from "prop-types";

const Profile = ({ profInfo }) => {
	return (
		<div className="profSection">
			<img id={profInfo.id} src={require("../" + profInfo.url)} alt="Profile" />
			<p className="profText">{profInfo.btnText}</p>
		</div>
	);
};

Profile.propTypes = {
	id: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	btnText: PropTypes.string.isRequired,
};

export default Profile;
