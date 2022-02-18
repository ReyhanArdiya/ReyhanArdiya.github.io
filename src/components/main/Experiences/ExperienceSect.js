import BGText from "../../common/BGText/BGText.js";
import PropTypes from "prop-types";
import Subtitle from "../../common/Text/Subtitle.js";
import TitleSideways from "../../common/Text/TitleSideways.js";
import styled from "styled-components";

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
		flex-shrink: 0;
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
	z-index: 1;
    display: grid;
    grid-template-areas:
        "subtitle"
        "icons";
    flex-grow: 1;
    grid-template-columns: 1fr;
    justify-items: ${({ right }) => right ? "end" : "start"};
    font-size: 1em;
    row-gap: 0.36em;
`;

const ExpSectSubtitle = styled(Subtitle)`
    color: var(--color-accent-1);
    grid-area: subtitle;
    font-size: 0.5715em;
`;

const iconSize = "1.08em";

const ExpSectIcons = styled.article`
    grid-area: icons;
    display: flex;
    width: 100%;
    overflow-x: scroll;
	font-size: 1em;
	column-gap: 0.715em;
	${({ right }) => right && "flex-flow: row-reverse;"}

	&::-webkit-scrollbar {
		display:none;
	}

    & > * {
		flex-shrink: 0;
        height: ${iconSize};
        width: ${iconSize};
    }
`;

const ExperienceSect = ({
	children: icons,
	className,
	sectSubtitle,
	BGTTextOne,
	BGTTextTwo,
	right = false
}) => {
	return (
		<ExpSectContainer className={className} right={right}>
			<TitleSideways>Experiences</TitleSideways>
			<BGText cols={10} rows={2} text={BGTTextOne} />
			<ExpSectContent right={right}>
				<ExpSectSubtitle>{sectSubtitle}</ExpSectSubtitle>
				<ExpSectIcons right={right}>{icons}</ExpSectIcons>
			</ExpSectContent>
			<BGText cols={10} rows={2} text={BGTTextTwo}/>
		</ExpSectContainer>
	);
};

ExperienceSect.propTypes = {
	BGTTextOne : PropTypes.string.isRequired,
	BGTTextTwo : PropTypes.string.isRequired,

	/** String array for path to each icon */
	children     : PropTypes.arrayOf(PropTypes.object).isRequired,
	className    : PropTypes.string,
	right        : PropTypes.bool,
	sectSubtitle : PropTypes.string.isRequired,
};

export default ExperienceSect;