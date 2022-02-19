import BGText from "../../common/BGText/BGText.js";
import TextP from "../../common/Text/TextP.js";
import Title from "../../common/Text/Title.js";
import styled from "styled-components";

const ProjectCardContainer = styled.article`
    width: 3.875em;
    height: 100%;
    display: grid;
    grid-template-areas:
        "iframe"
        "header"
        "desc";
    grid-template-columns: 1fr;
    grid-template-rows: minmax(0px, 0.535fr) minmax(0px, 0.16fr) minmax(0px, 0.335fr);
`;

const ProjectIframe = styled.iframe`
    grid-area: iframe;
    background: gray;
    width: 100%;
    height: 100%;
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

const ProjectCard = () => {
	return (
		<ProjectCardContainer>
			<ProjectIframe />
			<ProjectHeader>
				<ProjectBGT />
				<ProjectTitle></ProjectTitle>
			</ProjectHeader>
			<ProjectDesc></ProjectDesc>
		</ProjectCardContainer>
	);
};


export default ProjectCard;