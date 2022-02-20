import PropTypes from "prop-types";
import TextP from "../../common/Text/TextP.js";
import styled from "styled-components";

const ContactsListContainer = styled.section`
    grid-area: list;
    display: grid;
    grid-template-columns: 0.25fr 1fr;
    grid-auto-rows: 1fr;
    align-content: center;
    justify-items: center;
    column-gap: 0.155em;
    padding: 0.3em;

    svg {
        height: 100%;
        width: 100%;
    }
    p {
        justify-self: start;
        font-size: 0.25em;
        align-items: center;
        display: flex;
        justify-content: center;
    }
`;

const ContactsList = ({ contacts }) => {
	const list = contacts.flatMap(
		({ svg, text }) => [ svg, <TextP>{text}</TextP> ]
	);

	return (
		<ContactsListContainer>
			{list}
		</ContactsListContainer>
	);
};

ContactsList.propTypes = {
	contacts : PropTypes.arrayOf(PropTypes.shape({
		svg  : PropTypes.object,
		text : PropTypes.string
	})).isRequired
};

export default ContactsList;