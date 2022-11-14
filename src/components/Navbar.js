import React from "react";
import { HStack, Image, Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ButtonWrapper from "./ButtonWrapper";

const Navbar = () => {
	return (
		<nav>
			<HStack spacing={32}>
				<div>
					<Image
						// boxSize="100px"
						src={require("../images/logo-colored.png")}
						alt="MetaBnB logo"
					/>
				</div>
				<HStack spacing={8}>
					<Link to="/">Home</Link>
					<Link to="/nft-places">Place to stay</Link>
					<a href="/#nfts">NFTs</a>
					<a href="/#community">Community</a>
				</HStack>
				<div>
					<ButtonWrapper title="Connect wallet" />
				</div>
			</HStack>
		</nav>
	);
};

export default Navbar;
