import React from "react";
import PropTypes from "prop-types";

const AnchorBtn = ({ btnInfo }) => {
	return (
		<div hidden={btnInfo.hidden}>
			<a
				className="anchorBtn"
				id={btnInfo.id}
				href={
					btnInfo.id === "book__python"
						? btnInfo.url + `?ref_id=FatumaA`
						: btnInfo.url
				}
			>
				<p>{btnInfo.btnText}</p>
				<p className="subText">{btnInfo.btnSubText}</p>
			</a>
		</div>
	);
};

AnchorBtn.propTypes = {
	id: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	btnText: PropTypes.string,
	btnSubText: PropTypes.string,
	hidden: PropTypes.bool,
};

export default AnchorBtn;
