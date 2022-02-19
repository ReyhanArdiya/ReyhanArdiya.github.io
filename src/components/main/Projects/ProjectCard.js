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
    grid-template-rows: minmax(0px, 0.16fr) minmax(0px, 0.335fr);

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
`;

const ProjectBGT = styled(BGText)``;

const ProjectTitle = styled(Title)``;

const ProjectDesc = styled(TextP)`
    grid-area: desc;
    background: var(--color-primary-2);
`;

const ProjectCard = ({ children: desc, title, iframe }) => {
	return (
		<ProjectCardContainer>
			<ProjectIframe src={iframe} title={title} />
			<ProjectHeader>
				<ProjectBGT />
				<ProjectTitle>{title}</ProjectTitle>
			</ProjectHeader>
			<ProjectDesc>{desc}</ProjectDesc>
		</ProjectCardContainer>
	);
};

ProjectCard.propTypes = {
	children : PropTypes.string,
	iframe   : PropTypes.string.isRequired,
	title    : PropTypes.string.isRequired
};

export default ProjectCard;