import React from "react";
import { Link } from "react-router-dom";
import { useDisclosure, Flex, Button, VStack, Image } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import MobNavbar from "./MobNavbar";
import { ButtonWrapper } from "./ButtonWrapper";
import { ModalWrapper } from "./ModalWrapper";

export const MobileMenu = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		isOpen: isOpenMenu,
		onOpen: onOpenMenu,
		onClose: onCloseMenu,
	} = useDisclosure();
	const btnRef = React.useRef();

	return (
		<Flex
			position="fixed"
			w="100%"
			display={{ base: "flex", lg: "none" }}
			justifyContent="space-around"
		>
			<Image
				maxHeight="8"
				ml="-23px"
				onClick={() => (window.location.href = "/")}
				src={require("../images/logo-colored.png")}
				alt="MetaBnB logo"
			/>
			<ButtonWrapper title="Connect wallet" onClick={onOpen} />
			<ModalWrapper Open={isOpen} Close={onClose} />

			<Button ref={btnRef} onClick={onOpenMenu}>
				<HamburgerIcon size="18px" />
			</Button>

			<MobNavbar
				isOpen={isOpenMenu}
				onClose={onCloseMenu}
				finalFocusRef={btnRef}
			>
				<VStack alignItems="left">
					<Link to="/">Home</Link>
					<Link to="/nft-places">Place to stay</Link>
					<a href="/#nfts">NFTs</a>
					<a href="/#community">Community</a>
				</VStack>
			</MobNavbar>
		</Flex>
	);
};
