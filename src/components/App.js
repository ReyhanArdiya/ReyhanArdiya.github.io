import "./App.css";
import "./common.css";
import Intro from "./Intro/Intro.js";
import Navbar from "./Navbar/Navbar.js";
import { useState } from "react";

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

const root = document.documentElement;
let rootVars;
let rootVarsColor;

const documentStyleSheets = [ ...document.styleSheets ];

for (const sheet of documentStyleSheets) {
	for (const cssRule of sheet.cssRules) {
		if (cssRule.selectorText === ":root") {
			const rootStyles = getComputedStyle(root);
			rootVars = [ ...cssRule.style ];
			rootVarsColor = rootVars.map(
				rVar => rootStyles.getPropertyValue(rVar)
					         .trimStart()
			);
			break;
		}
	}
}

const onColorChangeCreator = setColorState => {
	return e => {
		setColorState(e.target.value);
	};
};

const App = () => {
	const [ colorOne, setColorOne ] = useState(rootVarsColor[0]);
	const [ colorTwo, setColorTwo ] = useState(rootVarsColor[1]);
	const [ colorThree, setColorThree ] = useState(rootVarsColor[2]);
	const [ colorFour, setColorFour ] = useState(rootVarsColor[3]);

	root.style.setProperty(rootVars[0], colorOne);
	root.style.setProperty(rootVars[1], colorTwo);
	root.style.setProperty(rootVars[2], colorThree);
	root.style.setProperty(rootVars[3], colorFour);

	const colorPallete = [
		{
			setter : onColorChangeCreator(setColorOne),
			val    : colorOne
		},
		{
			setter : onColorChangeCreator(setColorTwo),
			val    : colorTwo
		},
		{
			setter : onColorChangeCreator(setColorThree),
			val    : colorThree
		},
		{
			setter : onColorChangeCreator(setColorFour),
			val    : colorFour
	    }
	];

	return (
		<div className="App">
			<Navbar colorPallete={colorPallete} navbarLinks={navbarLinks} />
			<Intro />
		</div>
	);
};

export default App;
