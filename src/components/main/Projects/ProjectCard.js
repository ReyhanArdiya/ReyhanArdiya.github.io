import BGText from "../../common/BGText/BGText.js";
import PropTypes from "prop-types";
import TextP from "../../common/Text/TextP.js";
import Title from "../../common/Text/Title.js";
import styled from "styled-components";

const ProjectCardContainer = styled.article`
    width: 3.875em;
    height: 100%;
    display: grid;
    grid-template-areas:
        "header"
        "desc";
    grid-template-columns: minmax(0px, 1fr);
    grid-template-rows: minmax(0px, 0.335fr) minmax(0px, 0.8fr);

    @media screen and (min-width: calc(768em / 16)) {
        grid-template-areas:
        "iframe"
        "header"
        "desc";
        grid-template-rows: minmax(0px, 0.535fr) minmax(0px, 0.16fr) minmax(0px, 0.335fr);
    }
`;

const ProjectIframe = styled.iframe`
    display: none;
    grid-area: iframe;
    border: 1px solid var(--color-primary-1);
    border-bottom: none;
    width: 100%;
    height: 100%;

    @media screen and (min-width: calc(768em / 16)) {
        display: block;
    }
`;

const ProjectHeader = styled.header`
    grid-area: header;
    background: var(--color-primary-1);
    align-items: center;
    display: flex;
    justify-content: stretch;
    overflow: hidden;
    position: relative;
    z-index: 1;
`;

const ProjectBGT = styled(BGText)`
    position: absolute;
`;

const ProjectTitle = styled(Title)`
    font-size: 0.5em;
    color: var(--color-accent-1);
    text-align: center;
    width: 100%;
    z-index: 2;

    & a {
        color: inherit;
        text-decoration: none;
    }
`;

const ProjectDesc = styled(TextP)`
    grid-area: desc;
    background: var(--color-primary-2);
    font-size: 0.25em;
    text-align: left;
    overflow-y: auto;
    padding: 0.5em 1em;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const ProjectCard = ({ children: desc, BGText, title, iframe }) => {
	return (
		<ProjectCardContainer>
			<ProjectIframe src={iframe} title={title} />
			<ProjectHeader>
				<ProjectBGT cols={7} rows={5} text={BGText} />
				<ProjectTitle>
					<a target={0} href={iframe}>{title}</a>
				</ProjectTitle>
			</ProjectHeader>
			<ProjectDesc>{desc}</ProjectDesc>
		</ProjectCardContainer>
	);
};

ProjectCard.propTypes = {
	BGText   : PropTypes.string,
	children : PropTypes.string,
	iframe   : PropTypes.string.isRequired,
	title    : PropTypes.string.isRequired
};

export default ProjectCard;