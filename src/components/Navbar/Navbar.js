import "./Navbar.css";
import PropTypes from "prop-types";
import { useState } from "react";

const Navbar = props => {
	const links = props.children.split(" ");
	console.log(links);

	const [ activeLink, /* setActiveLink */ ] = useState(0);

	const navbarLinks = links.map((link, i) => {
		return (
			<p key={`navbar-link-${i}`} className={`navbar-link ${activeLink === i && "navbar-link-active"}`}>
				{link}
			</p>
		);
	});

	return (
		<nav id="navbar">
			{navbarLinks}
		</nav>
	);
};

Navbar.propTypes = { children : PropTypes.string.isRequired };

export default Navbar;