import "./Navbar.css";
import PropTypes from "prop-types";
import { useState } from "react";

const Navbar = props => {
	let { navbarLinks } = props;
	console.log(navbarLinks);

	const [ activeLink, /* setActiveLink */ ] = useState(0);

	navbarLinks = navbarLinks.map((navbarLink, i) => {
		const { link, text } = navbarLink;

		return (
			<a
				key={`navbar-link-${i}`}
				className={`navbar-link ${activeLink === i && "navbar-link-active"}`}
				href={link}
			>
				{text}
			</a>
		);
	});

	const handleLinkClick = e => {
		console.log(e);
	};

	return (
		<nav id="navbar" onClick={handleLinkClick}>
			{navbarLinks}
		</nav>
	);
};

Navbar.propTypes = {
	navbarLinks : PropTypes.arrayOf(PropTypes.shape({
		link : PropTypes.string.isRequired,
		text : PropTypes.string.isRequired,
	})).isRequired
};

export default Navbar;