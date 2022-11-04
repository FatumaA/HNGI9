import "./App.css";
import btnData from "./data.json";
import AnchorBtn from "./components/AnchorBtn";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import SocialSection from "./components/SocialSection";

function App() {
	const profInfo = {
		id: "profile__img",
		url: "profile.png",
		btnText: "Annette Black",
	};
	return (
		<>
			<div className="App">
				<Profile profInfo={profInfo} />
				{btnData.map((data) => (
					<AnchorBtn btnInfo={data} />
				))}
				<SocialSection />
			</div>
			<Footer />
		</>
	);
}

export default App;
