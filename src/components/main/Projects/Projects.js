import BGText from "../../common/BGText/BGText.js";
import ProjectCard from "./ProjectCard.js";
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

const ProjectsContent = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(0px, 1fr);
    grid-auto-flow: column;
    height: 4.75em;
    width: 100%;
    justify-items: center;
`;

const Projects = () => {
	return (
		<ProjectsContainer id="projects">
			<ProjectsHeader id="projects-header">
				<ProjectsBGT cols={1} rows={3} text={"AND HERE ARE SOME OF MY"}/>
				<ProjectsTitle>PROJECTS</ProjectsTitle>
			</ProjectsHeader>
			<ProjectsContent>
				<ProjectCard iframe="https://reyhanardiya.github.io/role-randomizer/" title="Role Randomizer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, ab, voluptas eveniet earum maiores, consequatur voluptatum expedita impedit officia minima iure quidem aperiam unde adipisci cupiditate porro dolore dolores! Aspernatur.</ProjectCard>
				{/* <Projectcard></Projectcard> */}
			</ProjectsContent>
		</ProjectsContainer>
	);
};

export default Projects;