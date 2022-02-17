import "./App.css";
import "./common.css";
import About from "./About/About.js";
import Intro from "./Intro/Intro.js";
import Navbar from "./Navbar/Navbar.js";

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
		</div>
	);
};
export default App;
