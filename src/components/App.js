import "./App.css";
import "./common/common.css";
import About from "./main/About/About.js";
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
		</div>
	);
};
export default App;
