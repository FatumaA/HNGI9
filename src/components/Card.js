import React from "react";
import {
	Stack,
	VStack,
	Image,
	Text,
	Grid,
	HStack,
	Container,
	Flex,
	SimpleGrid,
	GridItem,
	AspectRatio,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import homepic1 from "../images/homepic1.png";
import homepic2 from "../images/homepic2.png";
import homepic3 from "../images/homepic3.png";
import homepic4 from "../images/homepic4.png";
import homepic5 from "../images/homepic5.png";
import homepic6 from "../images/homepic6.png";
import homepic7 from "../images/homepic7.png";
import homepic8 from "../images/homepic8.png";
import nftpg9 from "../images/nftpg9.png";
import nftpg10 from "../images/nftpg10.png";
import nftpg11 from "../images/nftpg11.png";
import nftpg12 from "../images/nftpg12.png";
import nftpg13 from "../images/nftpg13.png";
import nftpg14 from "../images/nftpg14.png";
import nftpg15 from "../images/nftpg15.png";
import nftpg16 from "../images/nftpg16.png";

const Card = ({ isHomePage = true }) => {
	const p = [
		homepic1,
		homepic2,
		homepic3,
		homepic4,
		homepic5,
		homepic6,
		homepic7,
		homepic8,
	];
	const nftpics = [
		homepic1,
		homepic2,
		homepic3,
		homepic4,
		homepic5,
		homepic6,
		homepic7,
		homepic8,
		nftpg9,
		nftpg10,
		nftpg11,
		nftpg12,
		nftpg13,
		nftpg14,
		nftpg15,
		nftpg16,
	];
	return isHomePage ? (
		<Container maxWidth="1200px">
			<Grid
				templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
				gap={6}
			>
				{p.map((x, i) => (
					<>
						<Stack
							w="fit-content"
							alignItems="start"
							p="10px"
							border="1px solid #D7D7D7"
							borderRadius="10px"
						>
							<Image
								objectFit="cover"
								borderRadius="10px"
								maxHeight={["150px", "220px", "250px"]}
								key={i}
								src={x}
								alt={x}
							/>
							<Stack direction={["column", "row"]}>
								<Text>Desert King</Text>
								<Text fontWeight="bold">1MBT per night</Text>
							</Stack>
							<Stack direction={["column", "row"]}>
								<Text>2345km away</Text>
								<Text maxWidth="fit-content">Available for 2 weeks stay</Text>
							</Stack>
							<HStack>
								<StarIcon color="pink.700"></StarIcon>
								<StarIcon color="pink.700"></StarIcon>
								<StarIcon color="pink.700"></StarIcon>
								<StarIcon color="pink.700"></StarIcon>
								<StarIcon color="pink.700"></StarIcon>
							</HStack>
						</Stack>
					</>
				))}
			</Grid>
		</Container>
	) : (
		<Container maxWidth="1200px">
			<Grid
				templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
				gap={6}
				mb="20"
			>
				{nftpics.map((np, i) => (
					<>
						<Stack p="10px" border="1px solid #D7D7D7" borderRadius="10px">
							<Image
								objectFit="cover"
								borderRadius="10px"
								maxHeight={["150px", "220px", "250px"]}
								key={i}
								src={np}
								alt={np}
							/>

							<Stack direction={["column", "row"]}>
								<Text>Desert King</Text>
								<Text fontWeight="bold">1MBT per night</Text>
							</Stack>
							<Stack direction={["column", "row"]}>
								<Text>2345km away</Text>
								<Text maxWidth="fit-content">Available for 2 weeks stay</Text>
							</Stack>
							<HStack>
								<StarIcon color="pink.700"></StarIcon>
								<StarIcon color="pink.700"></StarIcon>
								<StarIcon color="pink.700"></StarIcon>
								<StarIcon color="pink.700"></StarIcon>
								<StarIcon color="pink.700"></StarIcon>
							</HStack>
						</Stack>
					</>
				))}
			</Grid>
		</Container>
	);
};

export default Card;
