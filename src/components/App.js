import "./App.css";
import "./common/common.css";
import About from "./main/About/About.js";
import ExperienceSect from "./main/Experiences/ExperienceSect.js";
import Intro from "./main/Intro/Intro.js";
import Motto from "./main/Motto/Motto.js";
import Navbar from "./main/Navbar/Navbar.js";

const navbarLinks = [
	{
		link : "#intro",
		text : "HOME"
	},
	{
		link : "#learned",
		text : "EXPERIENCES"
	},
	{
		link : "#contacts",
		text : "CONTACTS"
	},
	{
		link : "#CV",
		text : "CV"
	}
];

const App = () => {
	return (
		<div className="App">
			<Navbar navbarLinks={navbarLinks} />
			<Intro />
			<About />
			<Motto />
			<ExperienceSect BGTTextOne="LEARNED" BGTTextTwo="TECHS" sectSubtitle="And so far I've learned..." >Icons here</ExperienceSect>
		</div>
	);
};
export default App;
