import React from "react";
import {
	VStack,
	Image,
	Text,
	Grid,
	GridItem,
	HStack,
	Container,
} from "@chakra-ui/react";
import homepic1 from "../images/homepic1.png";
import homepic2 from "../images/homepic2.png";
import homepic3 from "../images/homepic3.png";
import homepic4 from "../images/homepic4.png";
import homepic5 from "../images/homepic5.png";
import homepic6 from "../images/homepic6.png";
import homepic7 from "../images/homepic7.png";
import homepic8 from "../images/homepic8.png";
import { StarIcon } from "@chakra-ui/icons";

const Card = ({ pics }) => {
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
	return (
		<Container maxWidth="1200px">
			<Grid templateColumns="repeat(4, 1fr)" gap={8}>
				{p.map((x) => (
					<>
						<VStack alignItems="start">
							<Image src={x} alt={x} />
							<HStack>
								<Text>Desert King</Text>
								<Text fontWeight="bold">1MBT per night</Text>
							</HStack>
							<HStack>
								<Text>2345km away</Text>
								<Text>Available for 2 weeks stay</Text>
							</HStack>
							<HStack>
								<StarIcon color="pink.700"></StarIcon>
								<StarIcon color="pink.700"></StarIcon>
								<StarIcon color="pink.700"></StarIcon>
								<StarIcon color="pink.700"></StarIcon>
								<StarIcon color="pink.700"></StarIcon>
							</HStack>
						</VStack>
					</>
				))}
			</Grid>
		</Container>
	);
};

export default Card;
