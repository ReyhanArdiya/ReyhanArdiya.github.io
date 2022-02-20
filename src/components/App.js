import "./App.css";
import "./common/common.css";
import About from "./main/About/About.js";
import Contacts from "./main/Contacts/Contacts.js";
import Experiences from "./main/Experiences/Experiences.js";
import Intro from "./main/Intro/Intro.js";
import Motto from "./main/Motto/Motto.js";
import Navbar from "./main/Navbar/Navbar.js";
import Projects from "./main/Projects/Projects.js";
// import { v4 as uuidv4 } from "uuid";

const navbarLinks = [
	{
		link : "#intro",
		text : "HOME"
	},
	{
		link : "#experiences",
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
			<Experiences />
			<Projects />
			<Contacts />
		</div>
	);
};
export default App;
