import "./ColorPicker.css";
import PropTypes from "prop-types";

import { useState } from "react";

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

const ColorPicker = () => {
	const [ colorOne, setColorOne ] = useState(rootVarsColor[0]);
	const [ colorTwo, setColorTwo ] = useState(rootVarsColor[1]);
	const [ colorThree, setColorThree ] = useState(rootVarsColor[2]);
	const [ colorFour, setColorFour ] = useState(rootVarsColor[3]);

	root.style.setProperty(rootVars[0], colorOne);
	root.style.setProperty(rootVars[1], colorTwo);
	root.style.setProperty(rootVars[2], colorThree);
	root.style.setProperty(rootVars[3], colorFour);

	return (
		<div id="color-picker">
			<label htmlFor="color-input-1" style={{ backgroundColor : colorOne }} className="color-picker-item"></label>
			<input onChange={onColorChangeCreator(setColorOne)} name="color-input-1" id="color-input-1" type={"color"} defaultValue={colorOne} />

			<label htmlFor="color-input-2" style={{ backgroundColor : colorTwo }} className="color-picker-item"></label>
			<input onChange={onColorChangeCreator(setColorTwo)} name="color-input-2" id="color-input-2" type={"color"} defaultValue={colorTwo} />

			<label htmlFor="color-input-3" style={{ backgroundColor : colorThree }} className="color-picker-item"></label>
			<input onChange={onColorChangeCreator(setColorThree)} name="color-input-3" id="color-input-3" type={"color"} defaultValue={colorThree} />

			<label htmlFor="color-input-4" style={{ backgroundColor : colorFour }} className="color-picker-item"></label>
			<input onChange={onColorChangeCreator(setColorFour)} name="color-input-4" id="color-input-4" type={"color"} defaultValue={colorFour} />
		</div>
	);
};

ColorPicker.propTypes = {
	colorPallete : PropTypes.arrayOf(PropTypes.shape({
		setter : PropTypes.func,
		val    : PropTypes.string
	}))
};

export default ColorPicker;