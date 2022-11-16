import React from "react";
import { Container, HStack, Image, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ButtonWrapper from "./ButtonWrapper";
import ModalWrapper from "./ModalWrapper";

const Navbar = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	return (
		<Container position="fixed" maxWidth="1200px" w="100%">
			<HStack
				justifyContent="space-between"
				display={{ base: "none", lg: "flex" }}
			>
				<Image
					maxHeight="8"
					ml="-23px"
					onClick={() => (window.location.href = "/")}
					src={require("../images/logo-colored.png")}
					alt="MetaBnB logo"
				/>
				<HStack spacing={8}>
					<Link to="/">Home</Link>
					<Link to="/nft-places">Place to stay</Link>
					<a href="/#nfts">NFTs</a>
					<a href="/#community">Community</a>
				</HStack>
				<ButtonWrapper title="Connect wallet" onClick={onOpen} />
				<ModalWrapper Open={isOpen} Close={onClose} />
			</HStack>
		</Container>
	);
};

export default Navbar;
