import BGText from "../../common/BGText/BGText.js";
import ProjectCard from "./ProjectCard.js";
import Title from "../../common/Text/Title.js";
import styled from "styled-components";


const ProjectsContainer = styled.section`
    grid-area: projects;
    display: flex;
    flex-direction: column;
    row-gap: 0.875em;
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
    height: max-content;
    width: 100%;
    justify-items: center;

    @media screen and (min-width: calc(768em / 16)) {
        height: 4.75em;
    }
`;

const Projects = () => {
	return (
		<ProjectsContainer id="projects">
			<ProjectsHeader id="projects-header">
				<ProjectsBGT cols={1} rows={3} text={"AND HERE ARE SOME OF MY"}/>
				<ProjectsTitle>PROJECTS</ProjectsTitle>
			</ProjectsHeader>
			<ProjectsContent>
				<ProjectCard iframe="https://vixun.herokuapp.com/" BGText="VIXUN" title="VIXUN">VIXUN is a website where you can search songs and shows you the song's link on Spotify, Deezer and Amazon Music. It aggregates data from Spotify's dan Deezer's API into one and scrapes the album's price from Amazon. Users can sign up for a local account that allows them to favorite and comment on every song.</ProjectCard>
				<ProjectCard iframe="https://reyhanardiya.github.io/role-randomizer/" BGText="Role Randomizer" title="R R">Role Randomizer is a website where you can randomizer roles for assignments. You can list names, roles and their quotas then it will randomize what assignment each member will get.</ProjectCard>
			</ProjectsContent>
		</ProjectsContainer>
	);
};

export default Projects;