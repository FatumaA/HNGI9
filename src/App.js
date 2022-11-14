import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NFTPlaces from "./pages/NFTPlaces";
import { Center, Container } from "@chakra-ui/react";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/nft-places" element={<NFTPlaces />} />
		</Routes>
	);
}

export default App;
