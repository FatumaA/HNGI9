import "./App.css";
import btnData from "./data.json";
import AnchorBtn from "./components/anchorBtn";
import Profile from "./components/profile";
import Footer from "./components/footer";
import SocialSection from "./components/socialSection";

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
