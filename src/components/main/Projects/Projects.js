import BGText from "../../common/BGText/BGText.js";
import Title from "../../common/Text/Title.js";
import styled from "styled-components";


const ProjectsContainer = styled.section`
    grid-area: projects;
`;

const ProjectsHeader = styled.header`
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;
`;

const ProjectsBGT = styled(BGText)`
    & span {
        font-size: 0.565em;
    }

`;

const ProjectsTitle = styled(Title)`
    color: var(--color-primary-1);
    position: absolute;
    font-size: 1.065em;
`;

const Projects = () => {
	return (
		<ProjectsContainer id="projects">
			<ProjectsHeader id="projects-header">
				<ProjectsBGT cols={1} rows={3} text={"AND HERE ARE SOME OF MY"}/>
				<ProjectsTitle>PROJECTS</ProjectsTitle>
			</ProjectsHeader>
		</ProjectsContainer>
	);
};

export default Projects;