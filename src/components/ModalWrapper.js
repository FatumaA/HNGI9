import React from "react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	ModalBody,
	ModalCloseButton,
	Divider,
	Text,
	VStack,
	HStack,
	Image,
	Spacer,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const ModalWrapper = ({ Open, Close }) => {
	return (
		<Modal isOpen={Open} onClose={Close}>
			<ModalOverlay />
			<ModalContent mt="64">
				<ModalHeader>Connect Wallet</ModalHeader>
				<ModalCloseButton />
				<Divider />
				<ModalBody>
					<Text mb="2">Choose your preferred wallet:</Text>
					<VStack spacing={4} mb="6">
						<HStack
							border="1px solid #CFD8DC"
							borderRadius="12px"
							p="1"
							w="100%"
							alignContent="stretch"
							bgColor="#F8F9FA"
						>
							<Image
								src={require("../images/metamask-colored-icon.png")}
								alt="metamask icon logo"
								ml="2"
								mr="2"
							/>
							<Text fontWeight="600">Metamask</Text>
							<Spacer />
							<ChevronRightIcon />
						</HStack>
						<HStack
							border="1px solid #CFD8DC"
							borderRadius="12px"
							p="1"
							w="100%"
						>
							<Image
								src={require("../images/walletconnect-icon.png")}
								alt="walletconnect icon logo"
								ml="2"
								mr="2"
							/>
							<Text fontWeight="600">Walletonnect</Text>
							<Spacer />
							<ChevronRightIcon />
						</HStack>
					</VStack>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
