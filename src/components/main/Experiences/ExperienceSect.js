import BGText from "../../common/BGText/BGText.js";
import PropTypes from "prop-types";
import Subtitle from "../../common/Text/Subtitle.js";
import TitleSideways from "../../common/Text/TitleSideways.js";
import styled from "styled-components";

// TODO make two for learned and learning and then combine them into one experiences component and change the App's grid area to it
const ExpSectContainer = styled.section`
	align-items: center;
	background-color: var(--color-primary-1);
	display: flex;
	font-size: 0.875em;
	height: 3.575em;
	overflow: hidden;
	position: relative;
	width: 100%;
    justify-content: space-between;
    column-gap: 0.1075em;

    ${({ right }) => right && "flex-flow: row-reverse;"}

    & > h2:first-of-type {
		z-index: 2;
		align-self: stretch;
		font-size: 0.43em;
		padding: 0 0.55em;
        ${({ right }) => right && "transform: none;"}
	}

	& > .BGT {
		font-size: 0.43em;
		position: absolute;
		z-index: 0;
	}

	& > .BGT:first-of-type {
		top: 0;
	}

	& > .BGT:last-of-type {
		bottom: 0;
	}

`;

const ExpSectContent = styled.section`
    display: grid;
    grid-template-areas:
        "subtitle"
        "icons";
    flex-grow: 1;
    justify-content: flex-start;
    font-size: 1em;
    row-gap: 0.36em;
`;

const ExpSectSubtitle = styled(Subtitle)`
    color: var(--color-accent-1);
    grid-area: subtitle;
    font-size: 0.5715em;
`;

const ExpSectIcons = styled.article`
    grid-area: icons;
    width: 100%;
`;

const ExperienceSect = ({
	children : icons,
	sectSubtitle,
	BGTTextOne,
	BGTTextTwo,
	sidewayTitlePos = false
}) => {
	return (
		<ExpSectContainer right={sidewayTitlePos}>
			<TitleSideways>Experiences</TitleSideways>
			<BGText cols={10} rows={2} text={BGTTextOne} />
			<ExpSectContent>
				<ExpSectSubtitle>{sectSubtitle}</ExpSectSubtitle>
				<ExpSectIcons>{icons}</ExpSectIcons>
			</ExpSectContent>
			<BGText cols={10} rows={2} text={BGTTextTwo}/>
		</ExpSectContainer>
	);
};

ExperienceSect.propTypes = {
	BGTTextOne      : PropTypes.string.isRequired,
	BGTTextTwo      : PropTypes.string.isRequired,
	children        : PropTypes.arrayOf(PropTypes.string).isRequired,
	icons           : PropTypes.arrayOf(PropTypes.string).isRequired,
	sectSubtitle    : PropTypes.string.isRequired,
	sidewayTitlePos : PropTypes.bool
};

export default ExperienceSect;