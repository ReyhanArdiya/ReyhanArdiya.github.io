import "./ColorPicker.css";
import PropTypes from "prop-types";

const ColorPicker = props => {
	const [
		{ setter: onColorOneChange, val: colorOne },
		{ setter: onColorTwoChange, val: colorTwo },
		{ setter: onColorThreeChange, val: colorThree },
		{ setter:onColorFourChange, val: colorFour }
	] = props.colorPallete;

	return (
		<div id="color-picker">
			<label htmlFor="color-input-1" style={{ backgroundColor : colorOne }} className="color-picker-item"></label>
			<input onChange={onColorOneChange} name="color-input-1" id="color-input-1" type={"color"} defaultValue={colorOne} />

			<label htmlFor="color-input-2" style={{ backgroundColor : colorTwo }} className="color-picker-item"></label>
			<input onChange={onColorTwoChange} name="color-input-2" id="color-input-2" type={"color"} defaultValue={colorTwo} />

			<label htmlFor="color-input-3" style={{ backgroundColor : colorThree }} className="color-picker-item"></label>
			<input onChange={onColorThreeChange} name="color-input-3" id="color-input-3" type={"color"} defaultValue={colorThree} />

			<label htmlFor="color-input-4" style={{ backgroundColor : colorFour }} className="color-picker-item"></label>
			<input onChange={onColorFourChange} name="color-input-4" id="color-input-4" type={"color"} defaultValue={colorFour} />
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