import React from "react";
import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Text,
} from "@chakra-ui/react";

const MobNavbar = ({
	p = 10,
	placement = "right",
	width,
	isOpen,
	children,
	onClose,
	btnRef,
	title = "Navigation",
}) => {
	return (
		<Flex w={width}>
			<Drawer
				isOpen={isOpen}
				placement={placement}
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent alignItems="start">
					<DrawerCloseButton alignSelf="end" mx={p} my={p} />
					<DrawerHeader my={p}>
						<Text> {title} </Text>
					</DrawerHeader>
					<DrawerBody>{children}</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Flex>
	);
};

export default MobNavbar;
