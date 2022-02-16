import "./Navbar.css";
import ColorPicker from "./ColorPicker.js";
import PropTypes from "prop-types";
import { useState } from "react";


const Navbar = props => {
	const [ activeLink, setActiveLink ] = useState(0);

	const navbarLinks = props.navbarLinks.map((navbarLink, i) => {
		const { link, text } = navbarLink;

		return (
			<a
				key={`navbar-link-${Math.random() * 101}`}
				data-which={i}
				className={`navbar-link ${activeLink === i ? "navbar-link-active" : ""}`}
				href={link}
			>
				{text}
			</a>
		);
	});

	const handleLinkClick = e => {
		if (e.target.classList.contains("navbar-link")) {
			setActiveLink(+e.target.dataset.which);
		}
	};

	return (
		<nav id="navbar" onClick={handleLinkClick}>
			<ColorPicker colorPallete={props.colorPallete} />
			{navbarLinks}
		</nav>
	);
};

Navbar.propTypes = {
	colorPallete : PropTypes.arrayOf(PropTypes.shape({
		setter : PropTypes.func,
		val    : PropTypes.string
	})),
	navbarLinks : PropTypes.arrayOf(PropTypes.shape({
		link : PropTypes.string.isRequired,
		text : PropTypes.string.isRequired,
	})).isRequired
};

export default Navbar;