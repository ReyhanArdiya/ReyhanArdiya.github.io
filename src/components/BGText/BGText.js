import "./BGText.css";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

/**
 * Use this component to create a repeated text background.
 *
 * @param {import("react").ComponentProps} props
 */
const BGText = props => {
	const { cols, rows = 1, text } = props;

	const textRows = [];
	for (let i = 0; i < rows; i++) {
		const textCols = [];
		for (let j = 0; j < cols; j++) {
			textCols.push(
				<span className="BGT-text" key={uuidv4()}>
					{text}
				</span>
			);
		}

		textRows.push(
			<div className="BGT-row" key={uuidv4()}>
				{textCols}
			</div>
		);
	}

	return (
		<div className="BGT">
			{textRows}
		</div>
	);
};

BGText.propTypes = {
	cols : PropTypes.number.isRequired,
	rows : PropTypes.number.isRequired,
	text : PropTypes.string.isRequired
};

export default BGText;